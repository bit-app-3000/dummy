import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import process from 'node:process'

const ROOT = resolve(import.meta.dirname, '..', '..', '..')

const PACKAGE_JSON = resolve(ROOT, 'package.json')

const require = createRequire(import.meta.url)

export const [name, env = 'development'] = process.argv.slice(2)

const packageJson = require(PACKAGE_JSON)
export const isProd = env === 'production'
// ENV
export const VERSION = packageJson.version

export const BUILD = '1'

// APP
export const { APP_ENV, APP_NAME } = process.env

// SVC
export const { SVC_HOST, SVC_SHUTDOWN_DELAY } = process.env
