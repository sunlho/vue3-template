// export * from '../services/baseClass'

declare interface BaseQuery {
  page: number
  limit: number
}

declare interface BaseResponseArray<T> extends BaseResponseData {
  data: {
    count: number
    rows: T[]
  }
}
declare interface BaseResponseData<T> extends BaseResponse {
  data: T
}
declare type BaseResponse = {
  message: string
  status: number
}
