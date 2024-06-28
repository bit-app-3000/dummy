import * as Components from '../components/index.js'

const toAttr = (t, a) => a || {}
const toTag = x => Components[x] || x
const Children = x => Array.isArray(x) ? Layout(x) : x

export const Layout = ([t, a, ...c]) => [toTag(t), toAttr(t, a), ...c.map(Children)]
