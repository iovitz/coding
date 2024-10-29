import Taro from '@tarojs/taro'
import config from '../config/config'

interface ResponseBody<T> {
  code: number
  data: T
  message: string
}

//网络请求拦截器
const interceptor = function (chain) {
  const requestParams = chain.requestParams
  // const { method, data, url } = requestParams
  let token = Taro.getStorageSync('TOKEN') //拿到本地缓存中存的token
  requestParams.header = {
    ...requestParams.header,
    Authorization: 'Bearer ' + token //将token添加到头部
  }
  return chain.proceed(requestParams).then((res) => {
    return res
  })
}

Taro.addInterceptor(interceptor)

const requestFn = async <T>(method: keyof Taro.request.Method, url: string, data: Record<string, string | number> = {}) => {
  const resp = await Taro.request<{
    code: number
    data: any
    message: string
  }>({
    method,
    url: config.baseUrl + url,
    data
  })
  const respData = resp.data
  switch (respData.code) {
    case 401:
      console.log('403')
      break
    case 403:
      console.log('403')
      break
    default:
      break
  }
  return respData as ResponseBody<T>
}

const request = {
  get: <T>(url: string, cfg?: Record<string, string | number>) => {
    return requestFn<T>('GET', url, cfg)
  },
  post: <T>(url: string, cfg?: Record<string, string | number>) => {
    return requestFn<T>('POST', url, cfg)
  },
  put: <T>(url: string, cfg?: Record<string, string | number>) => {
    return requestFn<T>('PUT', url, cfg)
  },
  delete: <T>(url: string, cfg?: Record<string, string | number>) => {
    return requestFn<T>('DELETE', url, cfg)
  }
}
export default request
