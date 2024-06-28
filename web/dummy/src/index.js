import { $replace, $compile } from '@thi.ng/rdom'
import { Init, layout$ } from './modules/index.js'

window.onload = () => {
  const root = document.querySelector('shell')
  return $compile($replace(layout$)).mount(root).then(Init)
}
