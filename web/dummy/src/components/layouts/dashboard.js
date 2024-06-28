import { data$ } from '../../modules/index.js'
import { Dropdown, Top } from '../index.js'

export const Dashboard = () =>
  [
    'main', {},
    Top(),
    ['header', {}, 'DASHBOARD'],
    [
      'section', {},
      [
        'bar', {},
        Dropdown({ id: 'x1', placement: 'bottom', state: 'hidden', data$ })
      ]]

  ]
