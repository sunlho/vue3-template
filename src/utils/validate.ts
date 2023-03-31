
/**
 * @description 判断是否为空
 * @param value
 * @returns {boolean}
 */
export function isBlank(value: any) {
  return (
    value === null ||
    false ||
    value === '' ||
    value.trim() === '' ||
    value.toLocaleLowerCase().trim() === 'null'
  )
}

/**
 * @description 判断是否为json
 * @param value
 * @returns {boolean}
 */
export function isJson(value: any) {
  if (typeof value === 'string') {
    const obj = JSON.parse(value)
    return !!(typeof obj === 'object' && obj)
  }
  return false
}

/**
 * 验证身份证号码
 * @param { String } code 身份证号码
 */
export function identityIDCard(code: string) {
  // 身份证号前两位代表区域
  const city = [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 71, 81, 82, 83, 91,]
  const idCardReg =
    /^[1-9]\d{5}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i // 身份证格式正则表达式
  let errorMessage = '' // 错误提示信息
  let isPass = true // 身份证验证是否通过（true通过、false未通过）

  // 如果身份证不满足格式正则表达式
  if (!code) {
    errorMessage = '请输入身份证号码'
    isPass = false
  } else if (!code.match(idCardReg)) {
    errorMessage = '请输入正确的身份证号码'
    isPass = false
  } else if (city.includes(parseInt(code.substring(0, 2)))) {
    errorMessage = '请输入正确的身份证号码'
    isPass = false
  } else if (code.length === 18) {
    const codeArr = code.split('')
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0
    let ai = 0
    let wi = 0
    for (let i = 0; i < 17; i++) {
      ai = parseInt(code[i])
      wi = factor[i]
      sum += ai * wi // 开始计算并相加
    }
    const last = parity[sum % 11] // 求余
    if (last.toString() !== codeArr[17].toUpperCase()) {
      errorMessage = '请输入正确的身份证号码'
      isPass = false
    }
  }
  return {
    errorMessage,
    isPass,
  }
}
