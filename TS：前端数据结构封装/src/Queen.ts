class Queen<T = any> {
  // 队列数组
  protected queen: T[] = []

  constructor(...args: T[]) {
    this.queen.push(...args)
  }

  get length() {
    return this.queen.length
  }

  // 队列判空
  empty() {
    return this.length === 0
  }

  // 查看队首元素
  peek() {
    return this.queen[0]
  }

  // 入队
  in(member: T) {
    this.queen.push(member)
    return this.length
  }

  // 出队
  out() {
    return this.queen.shift()
  }

  // 遍历
  forEach(handle: (member: T, index: number) => void) {
    const length = this.length
    for (let i = 0; i < length; i++) {
      handle(this.queen[i], i)
    }
  }
}

export default Queen
