import { LOG } from '@at/utils'
import { states } from './hub.js'

export function useSlot (seed) {
  const { id } = seed

  LOG('useSlot', seed)

  if (!Reflect.has(states.deref(), id)) {
    states.resetInUnsafe(id, seed)
  }
  return id
}
