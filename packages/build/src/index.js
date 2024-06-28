import { build, context } from 'esbuild'
import { writeFileSync } from 'node:fs'
import { APP, DIST, isProd, META_FILE, serv, STYLES, svc } from './paths.js'

import { pluginStatic } from './static.js'
import { pluginStyles } from './styles.js'

const define = {
  'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
  'import.meta.env': JSON.stringify({}),
  'window.svc': JSON.stringify(svc)
}

const opts = {
  entryPoints: [
    { in: APP, out: 'assets/index' },
    { in: STYLES, out: 'assets/index' }
  ],
  outdir: DIST,
  define,
  allowOverwrite: true,
  color: true,
  bundle: true,
  minify: true,
  treeShaking: true,
  splitting: false,
  platform: 'browser',
  format: 'esm',
  globalName: 'app',
  sourcemap: false,
  logLevel: 'debug',
  target: ['chrome100'],
  legalComments: 'none',
  metafile: isProd,
  // drop: ['LOG'],
  // external: ['require', 'fs', 'path', 'node:module', 'crypto', '/img/*'],
  plugins: [
    pluginStyles(),
    pluginStatic()
  ]
}

if (isProd) {
  const { metafile } = await build(opts)
  writeFileSync(META_FILE, JSON.stringify(metafile))
} else {
  const ctx = await context(opts)
  await ctx.watch()
  await ctx.serve(serv)
}
