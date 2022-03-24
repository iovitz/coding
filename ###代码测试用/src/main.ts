function repeatFunc (fn: (...args: any[]) => any, times: number, wait = 1000) {
  let timer: NodeJS.Timer | null = null
  return function (...args: any[]) {
    fn.apply(this, args)
    timer = setInterval(() => {
      fn.apply(this, args)
      times--
      if (times === 1) {
        timer !== null && clearInterval(timer)
      }
    }, wait)
  }
}

const func = repeatFunc(alert, 4, 3000)

func('Hello, world')
