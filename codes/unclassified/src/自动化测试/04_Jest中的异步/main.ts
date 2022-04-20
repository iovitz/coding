export function asyncFunc () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100)
    }, 100)
  })
}

export function errorAsyncFunc () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error('404')
    }, 100)
  })
}
