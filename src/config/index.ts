import privacy from './privacy'
const baseURL = import.meta.env.VITE_API_URL

const config = {
  baseURL,
  contentType: 'application/json', // 请求体内容类型 application/x-www-form-urlencoded | application/json .....
  requestTimeout: 10000, // 最长请求时间
  successCode: [200, '200', 'success'], // 操作正常code，支持String、Array、int多种类型
  statusName: 'status', // 数据状态的字段名称
  messageName: 'message', // 相应状态信息的字段名称
  tokenTableName: 'token', // token 在 localStorage、sessionStorage、cookie存储的key的名称
  userInfoTableName: 'userInfo', // userInfo 在 localStorage、sessionStorage、cookie存储的key的名称
  loginTimeTableName: 'login_time_stamp',
  tokenTimeOutValue: 2 * 3600 * 1000
}
export const WxJsApiConfig: WxJsApiConfigType = {
  enable: false, // 是否开启微信jsApi
  debug: false, // 是否开启微信jsApi调试模式
  test: true, // 是否开启微信本地测试
  jsApiList: [
    'checkJsApi',
    'scanQRCode',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'getNetworkType'
  ],
  onMenuShareAppMessage: {
    title: '测试标题',
    desc: '活动详情',
    link: '127.0.0.1',
    imgUrl: '',
    type: 'link',
    dataUrl: ''
  },
  onMenuShareTimeline: {
    title: '测试标题',
    link: '127.0.0.1',
    imgUrl: ''
  },
  ...privacy.WxJsApi
}
export default config
