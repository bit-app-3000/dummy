import { Svg } from './svg.js'

export const Icon = ({ id, ...props }) =>
  ['ico', props, Svg({ id })]
