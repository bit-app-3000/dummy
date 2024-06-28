export const Svg = ({ id, className }) =>
  [
    'svg', {},
    ['use', { href: `#${id}` }]
  ]

//   ['use', { href: `/img/sprite.svg#${id}` }]
