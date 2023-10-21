import axios, { AxiosRequestConfig, AxiosInstance, AxiosStatic } from "axios"

const statusName = "status"
const messageName = "message"
const successCode = [200, 0, "200", "0"]
const contentType = "application/json"

class MyAxios {
  readonly axios: AxiosInstance
  constructor(axios: AxiosStatic, config: AxiosRequestConfig) {
    this.axios = axios.create(config)
  }
  request<T = unknown, R = T, D = unknown>(
    config: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axios.request<T, R, D>(config)
  }
}

const service = new MyAxios(axios, {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 300000,
  headers: {
    "Content-Type": contentType,
  },
})

service.axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
service.axios.interceptors.response.use(
  (response) => {
    const { data, status } = response
    let code = data && data[statusName] ? data[statusName] : status
    if (successCode.includes(code)) code = 200
    switch (code) {
      case 200:
        return Promise.resolve(data)
      default:
        return Promise.reject(new Error(data[messageName]))
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
