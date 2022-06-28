import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { requestErrors } from './tips'

const service = axios.create({
  baseURL: 'http://localhost:25028',
  timeout: 10000,
})

type Method = 'post' | 'get' | 'put' | 'delete' | 'patch'

interface Options {
  method?: Method
  url?: any
  params?: any
  data?: any
}
export interface Data<T = any> {
  code: number
  data: T
  msg: string
}
service.interceptors.request.use((req: AxiosRequestConfig<any>) => {
  const headers = req.headers
  if (headers && headers.Authorization) headers.Authorization = 'Bear XXX'
  return req
})

service.interceptors.response.use((res: AxiosResponse<Data<any>>) => {
  const { data, code } = res.data
  switch (code) {
    case 200:
      return data
    case 40001:
      return Promise.reject(requestErrors.TOKEN_INVALID)
    default:
      return Promise.reject(requestErrors.NET_WORK_ERROR)
  }
})

const http = <T = any>(options: Options): Promise<Data<T>> => {
  if (!options.method) {
    options.method = 'get'
  }
  if (options.method.toLocaleLowerCase() && options.data && !options.params) {
    options.params = options.data
  }
  const promise = service({ ...options }) as Promise<any>
  return promise
}

export default http
