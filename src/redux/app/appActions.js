import {
  OPEN_SIDER, CLOSE_SIDER, SET_HEADER_STATUS, SIGN_IN, SIGN_OUT, SET_ROUTES,
} from './appActionTypes'

export const signIn = () => ({ type: SIGN_IN })
export const signOut = () => ({ type: SIGN_OUT })
export const openSider = () => ({ type: OPEN_SIDER })
export const closeSider = () => ({ type: CLOSE_SIDER })
export const setAuthRoutes = (payload) => ({ type: SET_ROUTES, payload })
export const toggleHeader = (payload) => ({ type: SET_HEADER_STATUS, payload })
