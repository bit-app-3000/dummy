export const clone = obj => JSON.parse(JSON.stringify(obj))

export const NO_OP = () => {}

export const delay = ms =>
  new Promise(resolve =>
    setTimeout(resolve, ms))

export const timeOut = (ms = 100) =>
  new Promise(resolve =>
    setTimeout(resolve, ms, 'timeOut'))

export function extend (a, ...b) {
  for (let i = 0; i < b.length; i++) {
    const obj = b[i]
    Object.assign(a, obj)
  }
  return a
}

export const isObject = obj => obj && obj instanceof Object && !(obj instanceof Array)
export const isArray = obj => Array.isArray(obj)
export const isString = obj => typeof obj === 'string'
