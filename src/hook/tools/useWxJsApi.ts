export const WxJsApiConfig: {
  debug: boolean
  jsApiList: wx.JsApi[]
  updateAppMessageShareData?: wx.AppMessageShareData
  updateTimelineShareData?: wx.TimelineShareData
} = {
  debug: false,
  jsApiList: ["getNetworkType"],
  updateAppMessageShareData: {
    title: "分享标题",
    desc: "分享描述",
    link: "分享链接",
    imgUrl: "分享图标",
    success: function () {
      // 设置成功
    },
  },
  updateTimelineShareData: {
    title: "分享标题",
    link: "分享链接",
    imgUrl: "分享图标",
    success: function () {
      // 设置成功
    },
  },
}

/**
 * @description 微信JSApi
 * @example const wxJsApi = new WxJsApi();
 * @tips 请查看配置文件中的微信公众号配置
 * @tips 当开启微信JSApi时，请将后端传递的appId, timestamp, nonceStr, signature 挂载到 window 对象上，开启test模式时，无需后端传递
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
    this._init()
  }
  private _init() {
    window.wx.config({
      debug: WxJsApiConfig.debug,
      appId: this.appId,
      timestamp: this.timestamp,
      nonceStr: this.nonceStr,
      signature: this.signature,
      jsApiList: WxJsApiConfig.jsApiList,
    })
    window.wx.ready(() => {
      window.wx.checkJsApi({
        jsApiList: WxJsApiConfig.jsApiList,
        success: (res: any) => {},
      })
      WxJsApiConfig.updateAppMessageShareData &&
        window.wx.updateAppMessageShareData(
          WxJsApiConfig.updateAppMessageShareData,
        )
      WxJsApiConfig.updateTimelineShareData &&
        window.wx.updateTimelineShareData(WxJsApiConfig.updateTimelineShareData)
    })
  }
}

export default WxJsApi
