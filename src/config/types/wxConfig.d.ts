
declare interface WxJsApiConfigType {
  enable: boolean
  debug: boolean
  test: boolean
  jsApiList: JSApis[]
  testAppId: string
  testAppSecret: string
  onMenuShareAppMessage: OnMenuShareAppMessageOptions
  onMenuShareTimeline: OnMenuShareTimelineOptions
}
