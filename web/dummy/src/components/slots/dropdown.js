import { LOG } from '@at/utils'
import { $refresh } from '@thi.ng/rdom'
import { toggle, useSlot, states$ } from '../../modules/index.js'
import { Menu } from '../index.js'
import { fromView } from '@thi.ng/rstream'

const slot = async x => {
  LOG('slot', x)

  return x.state === 'hidden'
    ? ['span', { hidden: true }]
    : Menu(x)
}

export const Dropdown = seed => [
  'dropdown', {
    onpointerdown: toggle(seed)
  },
  ['button', { type: 'button' }, 'Drop Down'],
  $refresh(fromView(states$, { path: useSlot(seed) }), slot)
]
