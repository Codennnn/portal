import { UserState, UserActionTypes, SET_USER_INFO } from './userActionTypes'

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
