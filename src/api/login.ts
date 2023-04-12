import service from '@/utils/request'

export interface LoginBody {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}

export function login(data: LoginBody) {
  return service.request<BaseResponseData<LoginResponse>>({
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
