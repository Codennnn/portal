import Cookies from 'js-cookie'

export function setToken(token: string, expires = 30) {
  Cookies.set('token', token, { expires })
}

export function getToken() {
  return Cookies.get('token')
}

export function removeToken() {
  Cookies.remove('token')
}
