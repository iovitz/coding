class UnionSet {
  parent: number[] = []

  constructor(public size: number) {
    size += 1
    for (let i = 0; i <= size; i++) {
      this.parent.push(i)
    }
  }

  /**
   * 查找值所在的集合
   * @param x 需要查找集合的值
   * @returns 值所属的集合
   */
  find(x: number) {
    const t = x
    const parent = this.parent
    while (parent[x] !== x) {
      x = parent[x]
    }
    parent[t] = parent[x]
    return parent[x]
  }

  // 合并
  merge(a: number, b: number) {
    const aRoot = this.find(a)
    const bRoot = this.find(b)
    this.parent[aRoot] = bRoot
  }
}

export default UnionSet
