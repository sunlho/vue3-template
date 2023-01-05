/**
 * @description: 登陆逻辑
 * @author: Caspian Sun
 */
import { ref } from 'vue'
import { showFailToast } from 'vant'
import { showSuccessToast } from 'vant'
import { useStore } from '@/store'
import { getCode } from '@/api/login'

/**
 * @description: 手机号验证码登陆
 * @param {string} phone 手机号
 * @param {string} code 验证码
 * @return {*}
 */
const phoneCodeLogin = (phone: string, code: string) => {
  console.log(phone, code)
}

/**
 * @description: 获取验证码
 * @param {string} phone 手机号
 */
const codeTime = ref(0)
const handleGetCode = async (phone: string) => {
  if (!phone) {
    showFailToast('请输入手机号')
    return
  }
  if (codeTime.value > 0) {
    showFailToast('请稍后再试')
    return
  }
  // const { status } = await getCode(phone)
  // if (status !== 200) {
  //   showFailToast('获取验证码失败')
  //   return
  // }
  showSuccessToast('验证码已发送')
  codeTime.value = 60
  const timer = setInterval(() => {
    codeTime.value--
    if (codeTime.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}
export { phoneCodeLogin, handleGetCode, codeTime }
