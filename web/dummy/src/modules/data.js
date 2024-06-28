import { rid, ulid } from '@at/utils'
import { reactive } from '@thi.ng/rstream'

const gen = length => Array.from({ length }, (_, idx) => {
  return {
    id: ulid(),
    ico: 'settings',
    label: rid(5)
  }
})

export const data$ = reactive(gen(3), {
  // cache: false,
  // closeIn: 1,
  closeOut: 0,
  id: 'dd:data'
})
