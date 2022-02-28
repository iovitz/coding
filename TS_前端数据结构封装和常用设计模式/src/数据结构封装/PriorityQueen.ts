import PriorityQueenMember from './PriorityQueenMember'

class PriorityQueen<T = any> {
  // 队列数组
  protected queen: PriorityQueenMember<T>[] = []

  /**
   * 往优先级队列中插入
   * @param member 需要插入的值
   * @param priority 优先级
   */
  insert(member: T, priority: number) {
    const newMember = new PriorityQueenMember(member, priority)
    const length = this.length
    if (this.queen.length === 0) {
      this.queen.push(newMember)
    } else {
      let isAdded = false
      for (let i = 0; i < length; i++) {
        if (this.queen[i].priority < priority) {
          isAdded = true
          this.queen.splice(i, 0, newMember)
          break
        }
      }
      if (!isAdded) {
        this.queen.push(newMember)
      }
    }
  }

  /**
   * 获取优先级队列长度
   * @returns优先级 队列长度
   */
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

  // 出队
  delete() {
    if (!this.empty()) {
      return this.queen.shift()
    } else {
      return void 0
    }
  }

  // 遍历
  forEach(handle: (member: PriorityQueenMember<T>, index: number) => void) {
    const length = this.length
    for (let i = 0; i < length; i++) {
      handle(this.queen[i], i)
    }
  }
}

export default PriorityQueen
