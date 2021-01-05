import { createSelectorHook } from 'react-redux'
import type { AppState } from './app/app-action-types'
import type { UserState } from './user/user-action-types'

export { store, persistor } from './create-store'

export const useTypedSelector = createSelectorHook<{
  app: AppState
  user: UserState
}>()
