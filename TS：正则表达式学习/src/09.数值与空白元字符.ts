const phoneReg = /\d{3}-\d{7}/g
const nameReg = /[^-\d：,\s]+/g

const str = `
张三：010-1111111,
李四：020-2222222
`

console.log(str.match(phoneReg))
console.log(str.match(nameReg))
export default {}
