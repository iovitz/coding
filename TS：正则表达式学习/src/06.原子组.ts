import { spliter } from './utils'
const reg1 = /(123|456)/

console.log(reg1.test('iovitz123'))
console.log(reg1.test('iovitz456'))
console.log(reg1.test('iovitz567'))

spliter()

const reg2 = /(123|456)/
console.log(reg2.test('iovitz123'))
console.log(reg2.test('iovitz456'))
console.log(reg2.test('iovitz567'))

export default {}
