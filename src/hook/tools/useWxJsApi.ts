/**
 * @author Caspian Sun
 * @notice 请确保已安装 vant 4.x 版本
 * @notice 请确保已安装 jssha 3.x 版本
 */
import { WxJsApiConfig } from '@/config'
import jsSHA1 from 'jssha/dist/sha1'
import {
  getWeChatAccessToken,
  getWeChatJsApiTicket
} from '@/api/weChatOpenTest'
import { showFailToast } from 'vant'
import { getItem, setItem, clear } from '@/utils/storage'

enum LocalName {
  accessTokenName = 'WE_CHAT_ACCESS_TOKEN',
  accessTokenDueName = 'WE_CHAT_ACCESS_TOKEN_DUE',
  jsApiTicketName = 'WE_CHAT_JS_API_TICKET',
  jsApiTicketDueName = 'WE_CHAT_JS_API_TICKET_DUE'
}
/**
 * @description 微信JSApi
 * @example const wxJsApi = new WxJsApi();
 * @tips 请查看配置文件中的微信公众号配置
 * @tips 当开启微信JSApi时，请将后端传递的appId, timestamp, nonceStr, signature 挂载到 window 对象上，开启test模式时，无需后端传递
 *
 */
class WxJsApi {
  private appId: string
  private timestamp: string
  private nonceStr: string
  private signature: string

  constructor() {
    this.appId = window.wxAppId
    this.timestamp = window.wxTimestamp
    this.nonceStr = window.wxNonceStr
    this.signature = window.wxSignature
    if (WxJsApiConfig.enable) {
      this._isTest()
    }
  }
  private _init() {
    window.wx.config({
      debug: WxJsApiConfig.debug,
      appId: this.appId,
      timestamp: this.timestamp,
      nonceStr: this.nonceStr,
      signature: this.signature,
      jsApiList: WxJsApiConfig.jsApiList,
      beta: false
    })
    window.wx.ready(() => {
      window.wx.checkJsApi({
        jsApiList: WxJsApiConfig.jsApiList
      })
      window.wx.onMenuShareAppMessage(WxJsApiConfig.onMenuShareAppMessage)
      window.wx.onMenuShareTimeline(WxJsApiConfig.onMenuShareTimeline)
    })
  }
  private async _isTest() {
    if (WxJsApiConfig.test) {
      const test = new WxJsApiTest()
      const { testAppId, signature, nonceStr, timestamp } = await test.init()
      this.appId = testAppId
      this.timestamp = timestamp
      this.nonceStr = nonceStr
      this.signature = signature
    }
    this._init()
  }
}

class WxJsApiTest {
  constructor() {
    if (
      !JSON.stringify(WxJsApiConfig) ||
      !JSON.stringify(WxJsApiConfig.test) ||
      !WxJsApiConfig.testAppId ||
      !WxJsApiConfig.testAppSecret
    ) {
      showFailToast('请正确配置微信测试号相关信息')
      throw new Error('请正确配置微信测试号相关信息')
    }
  }
  public async init() {
    const { testAppId, testAppSecret } = WxJsApiConfig
    const timestamp = Math.round(new Date().getTime() / 1000).toString()
    const nonceStr = 'Wm3WZYTPz0wzccnW'
    const signature = await this._generateJsApiTicket(
      testAppId,
      testAppSecret,
      nonceStr,
      timestamp
    )
    return {
      testAppId,
      signature,
      nonceStr,
      timestamp
    }
  }
  private async _generateJsApiTicket(
    testAppId: string,
    testAppSecret: string,
    nonceStr: string,
    timestamp: string
  ) {
    const url = window.location.href.split('#')[0]
    const accessToken = await this._getAccessToken(testAppId, testAppSecret)
    const jsapi_ticket = await this._getJsApiTicket(accessToken)
    const shaObj = new jsSHA1('SHA-1', 'TEXT', { encoding: 'UTF8' })
    shaObj.update(
      `jsapi_ticket=${jsapi_ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`
    )
    const sha = shaObj.getHash('HEX')
    return sha
  }
  private async _getAccessToken(testAppId: string, testAppSecret: string) {
    let accessToken = getItem(LocalName.accessTokenName)
    const accessTokenDue = getItem(LocalName.accessTokenDueName)
    if (
      !accessTokenDue ||
      !accessToken ||
      new Date().getTime() > parseInt(accessTokenDue)
    ) {
      clear()
      const { access_token, expires_in } = await getWeChatAccessToken(
        testAppId,
        testAppSecret
      )
      if (access_token) {
        setItem(LocalName.accessTokenName, access_token)
        const dueTime = new Date().getTime() + expires_in * 1000
        setItem(LocalName.accessTokenDueName, dueTime.toString())
        accessToken = access_token
      } else {
        showFailToast('accessToken获取失败')
        throw new Error('accessToken获取失败')
      }
    }
    return accessToken
  }
  private async _getJsApiTicket(accessToken: string) {
    let jsApiTicket = getItem(LocalName.jsApiTicketName)
    const jsApiTicketDue = getItem(LocalName.jsApiTicketDueName)
    if (
      !jsApiTicketDue ||
      !jsApiTicket ||
      new Date().getTime() > parseInt(jsApiTicketDue)
    ) {
      const { errcode, ticket, expires_in } = await getWeChatJsApiTicket(
        accessToken
      )
      if (errcode == 0 && ticket) {
        setItem(LocalName.jsApiTicketName, ticket)
        const dueTime = new Date().getTime() + expires_in * 1000
        setItem(LocalName.jsApiTicketDueName, dueTime.toString())
        jsApiTicket = ticket
      } else {
        showFailToast('jsApiTicket获取失败')
        throw new Error('jsApiTicket获取失败')
      }
    }

    return jsApiTicket
  }
}
export default WxJsApi
