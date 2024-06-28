import { LOG } from '@at/utils'
import Page from 'page/page.mjs'
import { app } from './hub.js'

const notFound = ({ params }) => {
  LOG('ROUTER:404')
}

const profile = ({ params }) => {
  LOG('ROUTER:PROFILE')
  app.resetInUnsafe('layout', ['Profile'])
}

const about = ({ params }) => {
  LOG('ROUTER:ABOUT')
  app.resetInUnsafe('layout', ['About'])
}

const main = ({ params }) => {
  LOG('ROUTER:MAIN')
  app.resetInUnsafe('layout', ['Dashboard'])
}

export const Router = () => {
  Page('/profile', profile)
  Page('/about', about)
  Page('/', main)
  Page('*', notFound)
  Page()
}
