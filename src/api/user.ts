import request from '@/utils/axios'

type User = { username: string; password: string }

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  })
}

export function login(data: User) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export function logout(data: User) {
  return request({
    url: '/user/logout',
    method: 'post',
    data,
  })
}

export function register(data: User) {
  return request({
    url: '/user/register',
    method: 'post',
    data,
  })
}
