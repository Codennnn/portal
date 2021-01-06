import { createSelectorHook, useDispatch } from 'react-redux'
import type { AppState, AppActionTypes } from './app/app-action-types'
import type { UserState, UserActionTypes } from './user/user-action-types'

export { store, persistor } from './create-store'

export const useTypedSelector = createSelectorHook<{
  app: AppState
  user: UserState
}>()

type Dispatch = <T>(action: AppActionTypes | UserActionTypes) => T

export const useTypedDispatch = () => useDispatch<Dispatch>()
