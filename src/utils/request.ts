import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosStatic,
} from 'axios'
import config from '@/config/index'

const {
  baseURL,
  requestTimeout,
} = config

class MyAxios {
  readonly axios: AxiosInstance
  constructor(axios: AxiosStatic, config: AxiosRequestConfig) {
    this.axios = axios.create(config)
  }
  request<T = unknown, R = T, D = unknown>(config: AxiosRequestConfig<D>): Promise<R> {
    return this.axios.request<T, R, D>(config)
  }
}

const service = new MyAxios(axios, {
  baseURL: baseURL,
  timeout: requestTimeout
})

service.axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
service.axios.interceptors.response.use(
  (response) => {
    const { data, status } = response
    if (status == 200) {
      return Promise.resolve(data)
    }
    return Promise.reject(new Error(data.message))
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
