import axios, {AxiosPromise, AxiosResponse} from 'axios'

const service = axios.create({
  timeout: 3000,
})

service.interceptors.request.use((req) => {
  // const headers = req.headers!
  // if (!headers.Authorization) headers.Authorization = 'Bear XXX'
  return req
})

interface Data<T = any> {
  code: number
  data: T
  msg: string
}

service.interceptors.response.use((res: AxiosResponse<any, Data<any>>) => {
  const {data, status} = res
  if (status === 200) {
    return data
  } else {
    const msg = '请求失败'
    return Promise.reject(msg)
  }
})

type Method = 'post' | 'get' | 'put' | 'delete' | 'patch'

interface Options {
  method?: Method
  url?: any
  params?: any
  data?: any
}

interface Request {
  <T = any>(options: Options): Promise<Data<T>>
  get?: Request
  post?: Request
  put?: Request
  delete?: Request
  patch?: Request
}

const request: Request = (options) => {
  if (options.method!.toLocaleLowerCase() === 'get') {
    options.params = options.data
  }
  const promise = service({...options}) as Promise<any>
  return promise
}

const methods: Method[] = ['post', 'get', 'delete', 'put', 'patch']

methods.forEach((item) => {
  request[item] = (options: Options) => {
    return request({
      ...options,
      method: item,
    })
  }
})

interface RequestInstance {
  <T = any>(options: Options): Promise<Data<T>>
  get: Request
  post: Request
  put: Request
  delete: Request
  patch: Request
}

export default request as RequestInstance
