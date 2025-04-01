/**
 * @description 微信JSApi
 * @example const wxJsApi = new WxJsApi();
 * @tips 请查看配置文件中的微信公众号配置
 * @tips 请将后端传递的appId, timestamp, nonceStr, signature 挂载到 window 对象 或者 传递到构造函数中
 */

declare global {
  interface Window {
    wxAppId?: string
    wxTimestamp?: string
    wxNonceStr?: string
    wxSignature?: string
  }
}

export class WxJsApi {
  private debug: boolean = false
  private jsApiList: wx.JsApi[] = []
  private appId: string
  private timestamp: string
  private nonceStr: string
  private signature: string

  constructor(config?: {
    debug?: boolean
    jsApiList?: wx.JsApi[]
    appId?: string
    timestamp?: string
    nonceStr?: string
    signature?: string
  }) {
    if (config?.debug) this.debug = true
    if (config?.jsApiList) this.jsApiList = config.jsApiList
    this.appId = window.wxAppId || config?.appId || ""
    this.timestamp = window.wxTimestamp || config?.timestamp || ""
    this.nonceStr = window.wxNonceStr || config?.nonceStr || ""
    this.signature = window.wxSignature || config?.signature || ""
  }
  public init() {
    return new Promise((resolve, reject) => {
      window.wx.config({
        debug: this.debug,
        appId: this.appId,
        timestamp: this.timestamp,
        nonceStr: this.nonceStr,
        signature: this.signature,
        jsApiList: this.jsApiList,
      })
      window.wx.ready(() => {
        window.wx.checkJsApi({
          jsApiList: this.jsApiList,
          success: (res: any) => {
            resolve(res)
          },
          fail: (err: any) => {
            reject(err)
          },
        })
      })
    })
  }

  public setWxShareData(data?: {
    updateAppMessageShareData?: wx.AppMessageShareData
    updateTimelineShareData?: wx.TimelineShareData
  }): void {
    if (data?.updateAppMessageShareData) window.wx.updateAppMessageShareData(data.updateAppMessageShareData)
    if (data?.updateTimelineShareData) window.wx.updateTimelineShareData(data.updateTimelineShareData)
  }
}

export default WxJsApi
