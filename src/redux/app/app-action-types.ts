export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'
export const SET_SIDER_STATUS = 'SET_SIDER_STATUS'
export const SET_ROUTES = 'SET_ROUTES'
export const SET_HEADER_STATUS = 'SET_HEADER_STATUS'

export interface AppState {
  isSiderOpened: boolean
  isHeaderFixed: boolean
  isLogin: boolean
  routes: any[]
}

interface SetLoginStatusAction {
  type: typeof SET_LOGIN_STATUS
  payload: boolean
}

interface SetSiderStatusAction {
  type: typeof SET_SIDER_STATUS
  payload: boolean
}

interface SetAuthRoutesAction {
  type: typeof SET_ROUTES
  payload: AppState['routes']
}

interface ToggleHeaderAction {
  type: typeof SET_HEADER_STATUS
  payload: boolean
}

export type AppActionTypes =
  | SetLoginStatusAction
  | SetSiderStatusAction
  | SetAuthRoutesAction
  | ToggleHeaderAction
