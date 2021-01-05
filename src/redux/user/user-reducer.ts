import type { UserState, UserActionTypes } from './user-action-types'
import { SET_USER_INFO } from './user-action-types'

const initialState: UserState = {
  info: {},
}

export default function userReducer(
  state = initialState,
  { type, payload }: UserActionTypes
): UserState {
  switch (type) {
    case SET_USER_INFO:
      return { ...state, info: payload as UserState['info'] }

    default:
      return state
  }
}
