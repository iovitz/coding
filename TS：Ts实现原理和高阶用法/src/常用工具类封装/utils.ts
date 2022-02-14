type TFunction = (...args: any) => any
/**
 * 防抖函数，函数在指定时间内多次执行只触发最后一次
 * @param fn 回调函数
 * @param timeout 防抖时间
 * @returns 防抖包装之后的函数
 */

function debounce (fn: TFunction, timeout: number = 300) {
  let timer: number
  return function (...args: any) {
    clearInterval(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, timeout)
  }
}

/**
 * 节流函数，函数在指定时间内只能触发一次
 * @param fn 回调函数
 * @param timeout 节流时间
 * @returns 节流包装之后的函数
 */
function throttle (fn: TFunction, timeout: number = 300) {
  let timenode = 0
  return function (...args: any) {
    if (Date.now() - timenode > timeout) {
      fn(...args)
      timenode = Date.now()
    }
  }
}

/**
 * 阻塞js线程
 * @param time 阻塞时间
 */
async function sleep (time: number) {
  await new Promise(resolve => setTimeout(resolve, time))
}
