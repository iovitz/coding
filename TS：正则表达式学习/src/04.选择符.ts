const str1 = '010-9999999'
const str2 = '020-9999999'
const str3 = '030-9999999'

const reg = /^(010|020)\-\d{7}$/g

console.log(reg.test(str1))
console.log(reg.test(str2))
console.log(reg.test(str3))
console.log(str1.match(reg))
console.log(str2.match(reg))
console.log(str3.match(reg))

export default {}
