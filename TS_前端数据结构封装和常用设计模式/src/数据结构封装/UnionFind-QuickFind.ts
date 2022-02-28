class UnionSetQuickFind {
  colors: number[] = []

  constructor(public size: number) {
    size += 1
    for (let i = 0; i < size; i++) {
      this.colors.push(i)
    }
  }

  // 查找
  find(x: number) {
    return this.colors[x]
  }

  // 路径压缩
  merge(a: number, b: number) {
    const colorA = this.find(a)
    const colorB = this.find(b)
    const colors = this.colors
    for (let n = 0; n < this.size; n++) {
      if (colors[n] === colorB) {
        colors[n] = colorA
      }
    }
  }
}

export default UnionSetQuickFind
