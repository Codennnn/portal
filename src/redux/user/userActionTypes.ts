export const SET_USER_INFO = 'SET_USER_INFO'

export interface UserState {
  info: { nickname?: string; avatar?: string }
}

interface SetUserInfoAction {
  type: typeof SET_USER_INFO
  payload: object
}

export type UserActionTypes = SetUserInfoAction
