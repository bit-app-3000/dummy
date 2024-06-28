import { $refresh } from '@thi.ng/rdom'
import { fromView } from '@thi.ng/rstream'
import { states, toggle, useSlot } from '../../modules/index.js'
import { Menu } from '../index.js'

const slot = async x =>
  x.state === 'hidden'
    ? ['span', { hidden: true }]
    : Menu(x)

export const Dropdown = seed => [
  'dropdown', {
    onpointerdown: toggle(seed)
  },
  ['button', { type: 'button' }, 'Drop Down'],
  $refresh(fromView(states, { path: useSlot(seed) }), slot)
]
