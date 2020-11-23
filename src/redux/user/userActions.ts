import { UserActionTypes, SET_USER_INFO } from './userActionTypes'

export function setUserInfo(payload: object): UserActionTypes {
  return { type: SET_USER_INFO, payload }
}
