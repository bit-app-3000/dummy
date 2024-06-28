import { defULID } from '@thi.ng/ksuid'
import { customAlphabet } from 'nanoid'

const id = defULID()

export const ulid = () => id.next()

export const rid = customAlphabet('abcdefghijklmnopqrstuvwxyz')
