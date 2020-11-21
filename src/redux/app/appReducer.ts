import { getToken } from '@/utils/token'
import routes from '@/routes'
import {
  AppState,
  AppActionTypes,
  OPEN_SIDER,
  CLOSE_SIDER,
  SET_HEADER_STATUS,
  SIGN_IN,
  SIGN_OUT,
  SET_ROUTES,
} from './appActionTypes'

const initialState: AppState = {
  isSiderOpened: true,
  isHeaderFixed: true,
  isLogin: !!getToken() || false,
  routes,
}

export default function appReducer(
  state = initialState,
  action: AppActionTypes
) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isLogin: true }

    case SIGN_OUT:
      return { ...state, isLogin: false }

    case OPEN_SIDER:
      return { ...state, isSiderOpened: true }

    case CLOSE_SIDER:
      return { ...state, isSiderOpened: false }

    case SET_ROUTES:
      return { ...state, routes: action.payload }

    case SET_HEADER_STATUS:
      return { ...state, isHeaderFixed: action.payload }

    default:
      return state
  }
}
