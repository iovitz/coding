class Heap<T> {
  protected data: T[] = []
  protected size: number = 0

  constructor (protected readonly maxSize: number) {
    console.log('..')
  }

  push (...args) {
    for (const val of args) {
      if (this.size > this.maxSize) {
        return false
      }
      this.data.push(val)
      this.size++
    }
    return true
  }

  pop () {
    if (this.size === 0) {
      this.data.pop()
      this.size--
    }
  }

  /**
   * 查看堆顶元素
   */
  toutch () {}
}
