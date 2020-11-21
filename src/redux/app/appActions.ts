import {
  AppActionTypes,
  OPEN_SIDER,
  CLOSE_SIDER,
  SET_HEADER_STATUS,
  SIGN_IN,
  SIGN_OUT,
  SET_ROUTES,
} from './appActionTypes'

// export const signIn: () => AppActionTypes = () => ({ type: SIGN_IN })
// export const signOut = () => ({ type: SIGN_OUT })
// export const openSider = () => ({ type: OPEN_SIDER })
// export const closeSider = () => ({ type: CLOSE_SIDER })
// export const setAuthRoutes = (payload: any) => ({ type: SET_ROUTES, payload })
// export const toggleHeader = (payload: any) => ({
//   type: SET_HEADER_STATUS,
//   payload,
// })

export function signIn(): AppActionTypes {
  return { type: SIGN_IN }
}

export function signOut(): AppActionTypes {
  return { type: SIGN_OUT }
}

export function openSider(): AppActionTypes {
  return { type: OPEN_SIDER }
}

export function closeSider(): AppActionTypes {
  return { type: CLOSE_SIDER }
}

export function setAuthRoutes(payload: Array<any>): AppActionTypes {
  return { type: SET_ROUTES, payload }
}

export function toggleHeader(payload: boolean): AppActionTypes {
  return { type: SET_HEADER_STATUS, payload }
}
