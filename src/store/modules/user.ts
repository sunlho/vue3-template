import { defineStore } from 'pinia'
import router from '@/router'
import md5 from 'md5'
import config from '@/config/index'
import { getItem, setItem, clear } from '@/utils/storage'
import { setLoginTime } from '@/utils/auth'
import type { LoginBody } from '@/api/login'
import { login } from '@/api/login'

interface UserStoreState {
  token: string
}

export default defineStore('backstageUser', {
  state(): UserStoreState {
    return {
      token: getItem(config.tokenTableName) || 'asd'
    }
  },
  actions: {
    /**
     * 封装登录请求动作
     */
    login(data: LoginBody) {
      const { username, password } = data
      // 返回promise对象
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await login({
            username,
            password: md5(password)
          })
          this.token = data.token
          setItem(config.tokenTableName, data.token)
          setLoginTime()
          resolve(() => {
            return
          })
        }
        catch (err) {
          reject(err)
        }

      })
    }
    // /**
    //  * 获取用户信息请求动作
    //  */
    // async getUserInfo() {
    //   const res = await getUserInfo()
    //   this.userInfo = res.data
    //   return res
    // },
    // /**
    //  * 退出登录
    //  */
    // loginOut() {
    //   this.token = ''
    //   this.userInfo = {}
    //   clear()
    //   window.$message.success('退出登陆成功')
    //   router.push({ path: '/login' })
    // }
  },
  getters: {
    // avatarUserInfo: (state) => {
    //   return state.userInfo.avatar || ''
    // },
    // hasUserInfo: (state) => {
    //   return JSON.stringify(state.userInfo) !== '{}'
    // }
  }
})
