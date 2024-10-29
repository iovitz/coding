import request from './request'

export function userLogin(username: string, password: string) {
  return request.post<{
    nickname: string
    status: number
    token: string
  }>('/user/login', {
    username,
    password
  })
}

export function userRegister(nickname: string, username: string, password: string) {
  return request.post<{
    nickname: string
    status: number
    token: string
  }>('/user/register', {
    nickname,
    username,
    password
  })
}
