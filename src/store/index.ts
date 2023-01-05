// store/index.ts
import { createPinia } from 'pinia'

import UserStore from './modules/user'

export function useStore() {
  return {
    user: UserStore()
  }
}

const pinia = createPinia()
export default pinia
