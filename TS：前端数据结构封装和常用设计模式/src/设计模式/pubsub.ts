class Eventer {
  /**
   * Eventer对象实例
   */
  private static instance = new this()

  /**
   * 获取Eventer对象实例
   * @returns Eventer对象实例
   */
  static getInstance () {
    return this.instance
  }

  /**
   * 存储事件的对象
   */
  protected events: {
    [key: string]: Array<(...args: any[]) => void>
  }

  protected constructor () {
    this.events = {}
  }

  /**
   * 监听一个事件
   * @param event 时间名
   * @param handle 回调函数
   */
  on (event: string, handle: (...args: any[]) => void) {
    if (this.events[event] === undefined) {
      this.events[event] = []
    }
    this.events[event].push(handle)
  }

  /**
   * 监听一个事件，只监听一次
   * @param event 事件名
   * @param handle 回调函数
   */
  once (event: string, handle: (...args: any[]) => void) {
    const fn = (...args: any[]) => {
      handle(...args)
      this.off(event, fn)
    }
    this.on(event, fn)
  }

  /**
   * 取消监听一个事件
   * @param event 事件名
   * @param handle 回调函数
   */
  off (event: string, handle?: () => void) {
    if (!handle) {
      delete this.events[event]
      return
    }
    const events = this.events[event]
    if (!events) return
    for (let i = 0; i < events.length; i++) {
      if (events[i] === handle) {
        events.splice(i, 1)
      }
    }
  }

  /**
   * 派发一个对象
   * @param event 事件名
   * @returns
   */
  emit (event: string, ...args: any[]) {
    const events = this.events[event]
    if (!events) return
    for (let i = 0; i < events.length; i++) {
      events[i](...args)
    }
  }
}

export default Eventer
