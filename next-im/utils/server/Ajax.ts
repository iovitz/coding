import axios, { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse, type AxiosInstance } from 'axios'

interface AjaxResponse<T> {
  status: number
  message: string
  data: T
}

export default class Ajax {
  server: AxiosInstance

  constructor(private baseURL: string, private timeout: number) {
    this.server = axios.create({
      baseURL,
      timeout,
    })
    this.registResponseInterceptor((v) => {
      return (v as any).data
    })
  }

  /**
   * 添加请求拦截
   */
  registRequestInterceptor: AxiosInterceptorManager<AxiosRequestConfig<unknown>>['use'] = (onFulfilled, options) => {
    return this.server.interceptors.request.use(onFulfilled, options)
  }

  /**
   * 添加响应拦截
   */
  registResponseInterceptor: AxiosInterceptorManager<AxiosResponse<unknown, unknown>>['use'] = (
    onFulfilled,
    options,
  ) => {
    return this.server.interceptors.response.use(onFulfilled, options)
  }

  get<T>(url: string, params?: any) {
    return this.server.get<T>(url, {
      ...params,
    }) as unknown as Promise<T>
  }

  post<T>(url: string, data?: any) {
    return this.server.post(url, {
      ...data,
    }) as unknown as Promise<T>
  }

  delete<T>(url: string, data?: any) {
    return this.server.delete(url, {
      ...data,
    }) as unknown as Promise<T>
  }

  put<T>(url: string, data?: any) {
    return this.server.put(url, {
      ...data,
    }) as unknown as Promise<T>
  }

  patch<T>(url: string, data?: any) {
    return this.server.patch(url, {
      ...data,
    }) as unknown as Promise<T>
  }

  createAjaxFn<T>(type: 'get' | 'post' | 'delete' | 'put' | 'patch', url: string, data?: any) {
    return () => {
      return this[type]<T>(url, data)
    }
  }
}
