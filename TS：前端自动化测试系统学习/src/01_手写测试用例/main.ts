import { add, minus, multi } from './func'

const num1 = 3
const num2 = 3
const result = add(num1, num2)
const expect = 6

if (add(3, 3) === expect) {
  console.log(`测试通过  example: add(${num1}, ${num2}), result: ${result}`)
} else {
  throw new Error(`测试失败  example: add(${num1}, ${num2}), result: ${result}`)
}
