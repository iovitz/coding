class bingchaSet {
  id: number[]

  constructor (n: number) {
    this.id = []
    for (let i = 0; i < n; i++) {
      this.id[i] = i
    }
  }

  // 查找
  find (a: number) {
    const id = this.id
    while (id[a] !== a) {
      a = id[a]
    }
    return id[a]
  }

  // 路径压缩
  merge (a, b) {
    const aRoot = this.find(a)
    const bRoot = this.find(b)
    if (aRoot !== bRoot) {
      this.id[aRoot] = bRoot
    }
  }
}
