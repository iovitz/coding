const reg = /i/

const str = 'iovitz'
console.log(reg.test(str))

const char = 'i'
console.log(eval(`/${char}/`).test(str))

