import request from '@/utils/axios'

export function getUserInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params,
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export function logout(data) {
  return request({
    url: '/user/logout',
    method: 'post',
    data,
  })
}

export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data,
  })
}
