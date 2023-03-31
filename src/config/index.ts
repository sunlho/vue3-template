import privacy from './privacy'
import type { WxJsApiConfigType } from './types'
const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.31.55:7001'
    : 'http://127.0.0.1:7001'

const config = {
  baseURL: baseURL, // 请求地址
  outDir: 'dist', // 打包输出目录
  outAssetsDir: 'assets', // 打包输出静态资源目录
  title: 'vue3-h5-template', // 网站标题
  base: '/', // 静态基础路径
  contentType: 'application/json', // 请求体内容类型 application/x-www-form-urlencoded | application/json .....
  requestTimeout: 10000, // 最长请求时间
  statusName: 'status', // 数据状态的字段名称
  messageName: 'message', // 相应状态信息的字段名称
  tokenTableName: 'token', // token 在 localStorage、sessionStorage、cookie存储的key的名称
  userInfoTableName: 'userInfo', // userInfo 在 localStorage、sessionStorage、cookie存储的key的名称
  loginTimeTableName: 'login_time_stamp',
  tokenTimeOutValue: 2 * 3600 * 1000
}
export const WxJsApiConfig: WxJsApiConfigType = {
  enable: true, // 是否开启微信jsapi
  debug: false, // 是否开启微信jsapi调试模式
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
