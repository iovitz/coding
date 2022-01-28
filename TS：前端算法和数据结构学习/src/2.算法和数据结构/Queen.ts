
class Queen<T = any> {
  protected queen: T[] = []
  protected length: number = 0

  constructor (...args: T[]) {
    this.queen.push(...args)
    this.length = this.queen.length
  }

  // is empty
  empty () {
    return this.length === 0
  }

  // get the first element
  touch () {
    return this.queen[0]
  }

  in () {
    ++this.length
    return this.queen.shift()
  }

  out (member: T) {
    this.queen.push(member)
    return ++this.length
  }

  scan () {}
}
