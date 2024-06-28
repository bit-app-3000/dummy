import { copy, outputFile } from 'fs-extra'
import { renderFile } from 'pug'
import { DIST, IMG, INDEX, isProd, SRC_FILES, SRC_IMG, SRC_INDEX, svc } from './paths.js'

const staticIndex = () => outputFile(INDEX, renderFile(SRC_INDEX, { svc: { ...svc, isProd } }), { overwrite: true })
const copyFiles = () => copy(SRC_FILES, DIST, { overwrite: true })
const copyImg = () => copy(SRC_IMG, IMG, { overwrite: true })

function buildStatic () {
  return copyImg()
    .then(copyFiles)
    .then(staticIndex)
}

async function onStart () {
  await buildStatic()
}

async function onEnd (res) {
  // LOG('buildStatic:END')
  // LOG('buildStatic', res)
}

const pluginStatic = () => ({
  name: 'static',
  setup: b => {
    b.onStart(onStart)
    b.onEnd(onEnd)
  }
})

export { pluginStatic }
