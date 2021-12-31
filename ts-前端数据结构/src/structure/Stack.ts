export default class Stack<T> {

  private data: T[]
  public size: number

  constructor(...args: T[]) {
    this.data = [...args]
    this.size = args.length
  }

  pop() {
    if(!this.data.length) return null
    this.size = this.data.length - 1
    return this.data.pop()
  }

  push(...args: T[]) {
    this.size = this.data.length + args.length
    this.data.push(...args)
    return this.size
  }

  show() {
    console.log(this.data)
  }

}