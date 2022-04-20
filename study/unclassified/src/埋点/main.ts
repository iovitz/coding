import monitor from './monitor/monitor'
monitor.init()

const jsErrorBtn = document.querySelector('#js-error')
const promiseErrorBtn = document.querySelector('#promise-error')

jsErrorBtn?.addEventListener('click', () => {
  a()
})

function a () {
  b()
}

function b () {
  throw new Error('Haha, js error!!!')
}

promiseErrorBtn?.addEventListener('click', () => {
  new Promise((resolve, reject) => {
    // undefined.name = '123'
    reject()
  }).then(res => {
    console.log(res)
  })
})
