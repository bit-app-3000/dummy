import less from 'less'
import { readdirSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { dirname, extname, join, resolve } from 'node:path'
import { STYLES } from './paths.js'

const filter = /\.less$/
const loaderOpts = { filter }

// ToDo refactor fs-extra
function getImports (dirPath, arr = []) {
  const extWhitelist = ['.css', '.less']

  readdirSync(dirPath, { withFileTypes: true })
    .forEach(file => {
      const path = join(dirPath, file.name)

      if (file.isDirectory()) { return getImports(path, arr) }

      if (file.isFile() && extWhitelist.includes(extname(path))) { arr.push(path) }
    })

  return arr
}

const onResolveHandler = ({ path, resolveDir }) => {
  const filePath = resolve(resolveDir, path)
  const dir = dirname(STYLES)
  const LessImports = getImports(dir)

  return {
    path: filePath,
    watchFiles: [filePath, ...LessImports]
  }
}

const onLoadHandler = async ({ path }) => {
  const content = await readFile(path, 'utf8')

  const lessOpts = {
    env: 'production',
    filename: path,
    relativeUrls: true
  }

  const { css } = await less.render(content, lessOpts)

  return {
    contents: css,
    loader: 'css'
  }
}

export const pluginStyles = () => ({
  name: 'styles',
  setup: b => {
    b.onResolve(loaderOpts, onResolveHandler)
    b.onLoad(loaderOpts, onLoadHandler)
  }
})
