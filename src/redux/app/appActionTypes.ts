export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const OPEN_SIDER = 'OPEN_SIDER'
export const CLOSE_SIDER = 'CLOSE_SIDER'
export const SET_ROUTES = 'SET_ROUTES'
export const SET_HEADER_STATUS = 'SET_HEADER_STATUS'

export interface AppState {
  isSiderOpened: boolean
  isHeaderFixed: boolean
  isLogin: boolean
  routes: Array<any>
}

interface SignInAction {
  type: typeof SIGN_IN
}

interface SignOutAction {
  type: typeof SIGN_OUT
}

interface OpenSiderAction {
  type: typeof OPEN_SIDER
}

interface CloseSiderAction {
  type: typeof CLOSE_SIDER
}

interface SetAuthRoutesAction {
  type: typeof SET_ROUTES
  payload: Array<any>
}

interface ToggleHeaderAction {
  type: typeof SET_HEADER_STATUS
  payload: boolean
}

export type AppActionTypes =
  | SignInAction
  | SignOutAction
  | OpenSiderAction
  | CloseSiderAction
  | SetAuthRoutesAction
  | ToggleHeaderAction
