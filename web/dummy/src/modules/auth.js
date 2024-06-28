import { LOG } from '@at/utils'
import { app } from './hub.js'

export const Auth = () => {
  LOG('AUTH')
  app.reset({
    account: { name: Date.now() },
    layout: ['Loader']
  })
}
