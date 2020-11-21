import Cookies from 'js-cookie'

export function setToken(token: string, expires: number = 30) {
  Cookies.set('token', token, { expires })
}

export function getToken() {
  return Cookies.get('token')
}

export function removeToken() {
  return Cookies.remove('token')
}
