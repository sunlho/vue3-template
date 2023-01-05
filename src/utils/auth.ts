import { setItem, getItem } from './storage'
import config from '@/config/index'

// 获取登陆时间戳
export function getLoginTime() {
  return getItem(config.loginTimeTableName)
}

// 设置登陆时间戳
export function setLoginTime() {
  setItem(config.loginTimeTableName, Date.now().toString())
}

// 失效时间戳
export function tokenTimeOut() {
  const loginTime = getLoginTime()
  const now = Date.now()
  return now - loginTime > config.tokenTimeOutValue
}
