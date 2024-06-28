import { beginTransaction } from '@thi.ng/atom'
import { states } from './index.js'

const tx = ({ id, state }) => {
  // LOG('TX', state)
  const t = beginTransaction(states)
  t.resetInUnsafe([id, 'state'], state)
  t.commit()
}

const commit = (x, state) => tx({ ...x, state })

const start = x => ({ target }) => {
  const { state } = x
  //  LOG('START', state)
  switch (state) {
    case 'appear':
      return appear(x, target)
    case 'disappear':
      return disappear(x, target)
  }
}

const cancel = x => ({ elapsedTime }) => {
  const { state } = x
  // LOG('CANCEL', state)
  switch (state) {
    case 'in':
    case 'out':
      return timing(x, elapsedTime)
  }
}

const end = x => () => {
  const { state } = x
  //  LOG('END', state)
  switch (state) {
    case 'in':
      return commit(x, 'show')
    case 'out':
      return commit(x, 'disappear')
  }
}

const timing = ({ id, state }, elapsedTime) => {
  const el = document.getElementById(id)
  if (el) {
    const anim = el.getAnimations().pop()
    const { activeDuration } = anim.effect.getComputedTiming()

    anim.pause()
    anim.currentTime = activeDuration - elapsedTime * 1000

    if (state === 'in') {
      anim.playbackRate = 1.5
    }

    anim.play()
  }
}

const appear = (x, target) => {
  // LOG('APPEAR')
  commit(x, 'in')
}

const disappear = (x, target) => {
  // LOG('DISAPPEAR')
  commit(x, 'hidden')
}

const toggle = ({ id }) => e => {
  const x = states.deref()[id]
  // LOG('TOGGLE',  x)

  const { state } = x
  switch (state) {
    case 'hidden':
      return commit(x, 'appear')
    case 'out':
      return commit(x, 'in')
    case 'in':
    case 'show':
      return commit(x, 'out')
  }
}

export { toggle, end, start, cancel }
