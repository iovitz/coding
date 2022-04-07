class Monitor {
  // 最后一个交互事件
  // 设置为 MouseEvent 瞒过 Typescript 的语法检查
  private lastEvent: MouseEvent | null = null

  constructor () {
  }

  init () {
    this.getLastSelector()
    this.injectError()
  }

  private getLastSelector () {
    ['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(eventType => {
      document.addEventListener(eventType, (event) => {
        this.lastEvent = event as MouseEvent
      }, {
        capture: true, // 捕获阶段
        passive: true // 不阻止默认事件
      })
    })
  }

  private injectError () {
    this.injectJsError()
    this.injectPromiseError()
    this.injectResourceError()
  }

  private injectJsError () {
    console.log('eee')
    window.addEventListener('error', (event: ErrorEvent) => {
      const { target } = event
      console.log(target)
      const jsErrorLog = {
        kind: 'stability',
        type: 'error',
        errorType: 'jsError',
        url: location.href,
        message: event.message,
        fileName: event.filename,
        position: `${event.lineno}:${event.colno}`,
        stack: this.formatJsErrorStack(event.error.stack),
        element: this.getLastElement()
      }
      console.log(jsErrorLog)
    })
  }

  private injectPromiseError () {
    window.addEventListener('unhandledrejection', (event) => {
      let { reason } = event
      reason = reason || ''
      let message: string = ''
      let stack: string = ''
      let fileName: string = ''
      let lineno: string = ''
      let colno: string = ''
      if (typeof event.reason === 'object') {
        if (reason instanceof Error) {
          message = reason.message || ''
          stack = reason.stack ? this.formatJsErrorStack(reason.stack) : ''
          const errorStackMatchResult = reason.stack?.match(/\s+at\s+(.+):(\d+):(\d+)\s+/)
          if (errorStackMatchResult) {
            fileName = errorStackMatchResult[1]
            lineno = errorStackMatchResult[2]
            colno = errorStackMatchResult[3]
          }
        } else {
          message = JSON.stringify(reason)
        }
      } else {
        message = `${reason}`
      }
      const promiseErrorLog = {
        kind: 'stability',
        type: 'error',
        errorType: 'promiseError',
        url: location.href,
        message,
        fileName,
        position: `${lineno}:${colno}`,
        stack: stack,
        element: this.getLastElement()
      }
      console.log(promiseErrorLog)
    })
  }

  private injectResourceError () {

  }

  /**
   * 获得最后一个交互元素
   */
  private getLastElement () {
    const { lastEvent } = this
    if (lastEvent) {
      const path: Element[] = (lastEvent as any).path
      return path.reverse().slice(2).reduce((prev, curr) => {
        const { id, classList } = curr
        let selectorStr = curr.nodeName.toLocaleLowerCase()
        if (id) {
          selectorStr += `#${id}`
        }
        if (classList && classList.length > 0) {
          selectorStr += `.${[...classList].join('.')}`
        }
        return prev ? `${prev}>${selectorStr}` : selectorStr
      }, '')
    } else {
      return ''
    }
  }

  /**
   * 格式化 Js error 中的堆栈inxi
   * @param stack Js error 中的堆栈信息
   * @returns 格式化之后的堆栈信息
   */
  private formatJsErrorStack (stack: string) {
    return stack.split('\n').slice(1).reverse().map(stackItem => {
      return stackItem.replace(/\s+at\s+/g, '')
    }).join('^')
  }
}

export default new Monitor()
