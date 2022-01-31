// 懒汉单例
class SingleTon1 {
  // eslint-disable-next-line no-use-before-define
  private static instance: SingleTon1 | null = null

  // eslint-disable-next-line no-useless-constructor
  private constructor () {}

  static getInstance () {
    if (!this.instance) {
      this.instance = new SingleTon1()
    }
    return this.instance
  }

  print () {
    console.log('懒汉单例')
  }
}

// 恶汉单例
class SingleTon2 {
  private static instance = new this()

  // eslint-disable-next-line no-useless-constructor
  private constructor () {}

  static getInstance () {
    return this.instance
  }

  print () {
    console.log('恶汉单例')
  }
}

SingleTon1.getInstance().print()
SingleTon2.getInstance().print()
