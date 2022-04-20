const usernameReg = /^[a-z]\w{5,9}$/

console.log(usernameReg.test('iovitz'))
console.log(usernameReg.test('iovitziovitz'))

// . 匹配除了换行符之外的任意字符
const dotReg = /^.+$/

console.log(dotReg.test('iovitz'))
console.log(dotReg.test('iovitz@qq.com'))
console.log(dotReg.test(`
  iovitz@qq.com
  iovitz@qq.com
  iovitz@qq.com
`))
export default {}
