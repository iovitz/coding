type Resolve<T> = (resolveValue: T) => any
type Reject = (rejectValue: any) => any
type Excutor<T> = (resolve: Resolve<T>, reject: Reject) => any

class Iromise<T = any> {
  public resolve: Resolve<T>
  public reject: Reject
  public status!: string
  private resolveValue: any
  private rejectValue: any
  private resolveCallbacks: (() => void)[] = []
  private rejectCallbacks: (() => void)[] = []

  constructor (excutor: Excutor<T>) {
    this.status = 'pending'
    this.resolve = (val: any): any => {
      if (this.status === 'pending') {
        this.status = 'success'
        this.resolveValue = val
        this.resolveCallbacks.forEach(callback => callback())
      }
    }
    this.reject = (val: any): any => {
      if (this.status === 'pending') {
        this.status = 'fail'
        this.rejectValue = val
        this.rejectCallbacks.forEach(callback => callback())
      }
    }
    try {
      excutor(this.resolve, this.reject)
    } catch (err: any) {
      // TODO: 要不要改成pending
      this.status = 'pending'
      this.reject(err.toString())
      throw new Error(err.toString())
    }
  }

  then (thenResolve?: Resolve<T>, thenReject?: Reject) {
    return new Iromise((resolve, reject) => {
      let result: any
      if (this.status === 'success' && thenResolve) {
        result = thenResolve(this.resolveValue)
        resolve(result)
      } else if (this.status === 'reject' && thenReject) {
        result = thenReject(this.resolveValue)
        reject('失败Then' + this.rejectValue)
      } else if (this.status === 'pending') {
        console.log('是不是pending')
        this.rejectCallbacks.push(() => {
          if (thenResolve) {
            result = thenResolve(this.resolveValue)
          }
          if (thenReject) {
            result = thenReject(this.resolveValue)
          }
        })
      }
    })
  }
}

const iromise = new Iromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
    reject('失败')
  }, 1000)
}).then((res) => {
  console.log(res)
  return 'part1, ok'
}, (err) => {
  console.log(err)
  return 'part1, nook'
}).then(res => {
  console.log('finale', res)
}, (err) => {
  console.log(err)
})
