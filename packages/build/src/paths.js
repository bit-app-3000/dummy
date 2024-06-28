import { SVC } from '@at/configs'
import { resolve } from 'node:path'
import process from 'node:process'

const { INIT_CWD, npm_config_local_prefix: ROOT } = process.env
export const [name, env = 'development'] = process.argv.slice(2)

export const isProd = env === 'production'

export const SRC = resolve(INIT_CWD, 'src')
export const APP = resolve(SRC, 'index.js')

export const SW = resolve(SRC, 'workers', 'sw.js')
export const STORE = resolve(SRC, 'workers', 'store.js')
export const SEED = resolve(SRC, 'workers', 'seed.js')

export const STATIC = resolve(SRC, 'static')

export const VIEWS = resolve(SRC, 'views')
export const SRC_INDEX = resolve(VIEWS, 'index.pug')

export const STYLES = resolve(SRC, 'styles', 'index.less')

export const SRC_IMG = resolve(STATIC, 'img')
export const SRC_FILES = resolve(STATIC, 'files')
export const SRC_AUTH = resolve(STATIC, 'auth')

export const DIST = resolve(ROOT, 'dist', name)

export const INDEX = resolve(DIST, 'index.html')
export const META_FILE = resolve(DIST, 'meta.json')

export const ASSETS = resolve(DIST, 'assets')

export const IMG = resolve(DIST, 'img')

export const svc = SVC[name]

const { host, port, protocol } = svc

const SRV = port // 8000

export const serv = {
  servedir: DIST,
  host,
  port: SRV,
  fallback: INDEX
}

export const SERVING = `\nServing → ${protocol}://${host}:${port}\n`

export function serving () {
  // LOG(`\nServing → ${protocol}://${host}:${port}\n`)
}

export const proxy = {
  protocol,
  host,
  port: SRV,
  listen: port
}
