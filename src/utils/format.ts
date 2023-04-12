import { identityIDCard } from "./validate"

/**
 * @description 格式化时间戳
 * @param timestamp 时间戳
 * @returns 格式化后的时间
 */
export function timestampToTime(timestamp: string | number) {
  if (!timestamp) return ''
  const strLength = String(timestamp).length
  if (strLength != 10 && strLength != 13) return ''
  if (strLength == 10) timestamp = Number(timestamp) * 1000
  const date = new Date(Number(timestamp))
  const Y = date.getFullYear() + '-'
  const M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + ' ' + h + ':' + m + ':' + s
}


/**
 * @description 根据身份证号码获取出生日期
 * @param idCard 身份证号码
 * @returns 出生日期
 */
export function getBirthDateFromIdCard(idCard: string | number) {
  const id = String(idCard)
  if (identityIDCard(id).isPass == false) return ''
  let birthday = ''
  if (id != null && idCard != '') {
    if (id.length == 15) {
      birthday = '19' + id.substring(6, 6)
    } else if (id.length == 18) {
      birthday = id.substring(6, 8)
    }
    birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-')
  }
  return birthday
}
