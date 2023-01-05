import service from '@/utils/request'
import type { LoginData } from './types/login'

export function login(data: LoginData) {
  return service.request({
    method: 'post',
    url: '/login',
    data
  })
}

// 获取验证码
export function getCode(phone: string) {
  return service.request({
    method: 'get',
    url: `/getCode/${phone}`
  })
}
