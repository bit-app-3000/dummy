import { defAtom } from '@thi.ng/atom'
import { ConsoleLogger } from '@thi.ng/logger'
import { fromView, LOGGER } from '@thi.ng/rstream'
import { Layout } from './layout.js'

LOGGER.set(new ConsoleLogger('rs', 'DEBUG'))

export const states$ = defAtom({})

const seed = {
  account: null,
  layout: ['Loader']
}

// APP
const app = defAtom(seed)
const layout$ = fromView(app, { path: 'layout', tx: Layout })

export { app, layout$ }
