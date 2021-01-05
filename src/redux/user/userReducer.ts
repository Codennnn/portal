import { createSelectorHook } from 'react-redux'
import type { UserState, UserActionTypes } from './userActionTypes'
import { SET_USER_INFO } from './userActionTypes'

export const useTypedSelector = createSelectorHook<Record<'user', UserState>>()

const initialState: UserState = {
  info: {},
}

export default function userReducer(
  state = initialState,
  { type, payload }: UserActionTypes
) {
  switch (type) {
    case SET_USER_INFO:
      return { ...state, info: payload }

    default:
      return state
  }
}
