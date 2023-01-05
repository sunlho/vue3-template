import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosHeaders,
  AxiosInstance
} from 'axios'
import { useStore } from '@/store'
import { showFailToast } from 'vant'
import config from '@/config'

interface IAxiosInstance extends AxiosInstance {
  request<T = any, D = any>(config: AxiosRequestConfig<D>): Promise<T>
}

const {
  baseURL,
  contentType,
  messageName,
  requestTimeout,
  statusName,
  successCode
} = config

const codeVerificationArray = Array.isArray(successCode)
  ? [...successCode]
  : [...[successCode]]

const service = <IAxiosInstance>axios.create({
  baseURL: baseURL,
  timeout: requestTimeout
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { user } = useStore()
    const token = user.token
    const headers = new AxiosHeaders()
    headers.set('Content-Type', contentType)
    // if (token) {
    //   headers.set('Authorization', token)
    // }
    config.headers = headers
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, status = 0, statusText } = response
    let code: number = data && data[statusName] ? data[statusName] : status
    if (codeVerificationArray.indexOf(code) + 1) code = 200
    switch (code) {
      case 200:
        return data
      case 401:
        break
    }
    const errMsg = `${
      data && data[messageName] ? data[messageName] : statusText
    }`
    showFailToast(errMsg)
    return Promise.reject(response)
  },
  (error) => {
    showFailToast(error)
  }
)

export default service
