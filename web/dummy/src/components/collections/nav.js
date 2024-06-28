import { $list } from '@thi.ng/rdom'
import { reactive } from '@thi.ng/rstream'

const data$ = reactive([
  { id: 'dashboard', label: 'Dashboard', href: '/' },
  { id: 'profile', label: 'Profile', href: '/profile' },
  { id: 'about', label: 'About', href: '/about' }
])

const Item = ({ href, label }) =>
  [
    'li', {},
    ['a', { href }, label]
  ]

export const Nav = () =>
  $list(
    data$,
    'nav',
    {},
    Item
  )
