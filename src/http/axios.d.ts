import { AxiosAdapter } from "axios"

type ResponseType<T> = T extends BaseResponse ? T : unknown extends T ? BaseResponseWithData<any> : BaseResponseWithData<T>

declare module "axios" {
  interface AxiosInstance {
    <T = unknown, R = ResponseType<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>
    <T = unknown, R = ResponseType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
    request<T = any, R = ResponseType<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>
    get<T = any, R = ResponseType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
    delete<T = any, R = ResponseType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
    head<T = any, R = ResponseType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
    options<T = any, R = ResponseType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
    post<T = any, R = ResponseType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
    put<T = any, R = ResponseType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
    patch<T = any, R = ResponseType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
    postForm<T = any, R = ResponseType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
    putForm<T = any, R = ResponseType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
    patchForm<T = any, R = ResponseType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
  }
}
