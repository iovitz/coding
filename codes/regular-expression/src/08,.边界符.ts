import { spliter } from './utils'

const oneTwoThreeReg = /^123$/
console.log(oneTwoThreeReg.test('123'))
console.log(oneTwoThreeReg.test('1233'))

spliter()

const nameReg = /^\w{6,10}$/
console.log(nameReg.test('iovitz'))
console.log(nameReg.test('iovitziovitz'))

export default {}
