import { SET_USER_INFO } from './userActionTypes'

const initialState = {
  info: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      return { ...state, info: payload }

    default:
      return state
  }
}
