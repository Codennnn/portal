import { getToken } from '@/utils/token'
import routes from '@/routes'
import {
  OPEN_SIDER, CLOSE_SIDER, SET_HEADER_STATUS, SIGN_IN, SIGN_OUT, SET_ROUTES,
} from './appActionTypes'

const initialState = {
  isSiderOpened: true,
  isHeaderFixed: true,
  isLogin: !!getToken() || false,
  routes,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, isLogin: true }

    case SIGN_OUT:
      return { ...state, isLogin: false }

    case OPEN_SIDER:
      return { ...state, isSiderOpened: true }

    case CLOSE_SIDER:
      return { ...state, isSiderOpened: false }

    case SET_ROUTES:
      return { ...state, routes: payload }

    case SET_HEADER_STATUS:
      return { ...state, isHeaderFixed: payload }

    default:
      return state
  }
}
