import { $klist } from '@thi.ng/rdom'
import { cancel, end, start } from '../../modules/slot.js'
import { Icon } from '../index.js'

const Item = ({ ico, label }) => ['li', {}, Icon({ id: ico }), label]

export const Menu = x => {
  // LOG('MENU:RDR')

  const { id, state, placement, data$ } = x

  return $klist(
    data$,
    'menu',
    {

      id,
      state,
      placement,

      onanimationstart: start(x),
      onanimationcancel: cancel(x),
      onanimationend: end(x)
    },
    Item,
    ({ id, label }) => [id, state, label].join('-')
  )
}

/*
return ['menu',
  {

    state,
    placement,

    onanimationstart: start(x),
    onanimationcancel: cancel(x),
    onanimationend: end(x)
  } ,
  ['li', {}, Icon({ id: 'palette' }), 'label 1'],
  ['li', {}, Icon({ id: 'palette' }), 'label 1'],
  ['li', {}, Icon({ id: 'palette' }), 'label 1'],
  ['li', {}, Icon({ id: 'palette' }), 'label 1'],
  ['li', {}, Icon({ id: 'palette' }), 'label 1'],
  ['li', {}, Icon({ id: 'palette' }), 'label 1'],
  ['li', {}, Icon({ id: 'palette' }), 'label 1']
] */
