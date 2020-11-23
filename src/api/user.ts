import request from '@/utils/axios'

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  })
}

export function login(data: {
  username: string
  password: string
}): { token: string } {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export function logout(data: { username: string; password: string }) {
  return request({
    url: '/user/logout',
    method: 'post',
    data,
  })
}

export function register(data: { username: string; password: string }) {
  return request({
    url: '/user/register',
    method: 'post',
    data,
  })
}
