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

export interface HttpRequest {
  <T = any>(options: Options): Promise<Data<T>>
}
