export const excuteIfIsLoggedIn = <A extends Array<any>, T>(fn: (...args: A) => T) => {
  return (...args: A): T | undefined => {
    if (isLoggedIn()) {
      return fn(...args)
    }
    console.log('这就是奇迹')
  }
}
export const isLoggedIn = () => {
  return true
}
