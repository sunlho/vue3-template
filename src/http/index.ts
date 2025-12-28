import axios from "axios"

const baseURL = import.meta.env.VITE_API_URL
const timeout = 20000
const statusName = "status"
const messageName = "message"
const successCode = [200, 0, "200", "0"]
const contentType = "application/json"

const service = axios.create({
  baseURL,
  timeout,
  headers: { "Content-Type": contentType },
  withCredentials: true,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
service.interceptors.response.use(
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
export const axiosInstance = service
export const request = service
