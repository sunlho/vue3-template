const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.31.55:7001'
    : 'http://127.0.0.1:7001'
const base = '/'

const config = {
  baseURL: baseURL, // 请求地址
  title: 'orange', // 网站标题
  base: base, // 静态基础路径
  contentType: 'application/json', // 请求体内容类型 application/x-www-form-urlencoded | application/json .....
  messageName: 'message', // 相应状态信息的字段名称
  requestTimeout: 10000, // 最长请求时间
  successCode: [200, 0, '200', '0', 'success'], // 操作正常code，支持String、Array、int多种类型
  statusName: 'status', // 数据状态的字段名称
  tokenTableName: 'token', // token 在 localStorage、sessionStorage、cookie存储的key的名称
  userInfoTableName: 'userInfo', // userInfo 在 localStorage、sessionStorage、cookie存储的key的名称
  loginTimeTableName: 'login_time_stamp',
  tokenTimeOutValue: 2 * 3600 * 1000,
}
export default config
