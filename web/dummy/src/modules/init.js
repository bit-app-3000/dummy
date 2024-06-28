import { composeAsync } from '@at/utils'
import { Router } from './router.js'
import { Auth } from './auth.js'

export const Init = composeAsync(Router, Auth)
