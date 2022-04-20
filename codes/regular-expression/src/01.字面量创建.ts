const reg = /i/

const str = 'iovitz'
console.log(reg.test(str))

const char = 'i'

// eslint-disable-next-line no-eval
console.log(eval(`/${char}/`).test(str))

export default {}
