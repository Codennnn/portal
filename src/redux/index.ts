import { createSelectorHook, useDispatch } from 'react-redux'

import type { AppActionTypes, AppState } from './app/app-action-types'
import type { UserActionTypes, UserState } from './user/user-action-types'

export { persistor, store } from './create-store'

export const useTypedSelector = createSelectorHook<{
  app: AppState
  user: UserState
}>()

type Dispatch = <T>(action: AppActionTypes | UserActionTypes) => T

export const useTypedDispatch = () => useDispatch<Dispatch>()
