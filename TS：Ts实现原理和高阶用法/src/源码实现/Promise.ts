type Resolve<T> = (resolveValue: T) => any
type Reject = (rejectValue: any) => any
type Excutor<T> = (resolve: Resolve<T>, reject: Reject) => any

class Iromise<T = any> {
  public resolve: Resolve<T>
  public reject: Reject
  public status!: string
  private resolveValue: any
  private rejectValue: any

  constructor (excutor: Excutor<T>) {
    this.status = 'pending'
    this.resolve = (val: any): any => {
      if (this.status === 'pending') {
        this.status = 'success'
        console.log('resolve => ', val)
      }
    }
    this.reject = (val: any): any => {
      if (this.status === 'pending') {
        this.status = 'fail'
        console.log('reject => ', val)
      }
    }
    try {
      excutor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }

  then (thenResolve: Resolve<T>, thenReject: Reject) {
    if (this.status === 'success') {
      thenResolve(this.resolveValue)
    } else if (this.status === 'reject') {
      thenReject('失败Then' + this.rejectValue)
    }
  }
}

const iromise = new Iromise((resolve, reject) => {
  resolve('成功')
  reject('失败')
})
