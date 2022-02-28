import { add } from './func'
function expect (result: any) {
  return {
    toBe (expect: any) {
      if (result !== expect) {
        throw new Error(`expect ${expect} got ${result}`)
      }
    }
  }
}

function test (desc: string, fn: (...args: any) => any) {
  try {
    fn()
    console.log(`${desc} 测试通过`)
  } catch (e: any) {
    console.log(`${desc} 测试不通过: ${e.message}`)
  }
}

test('Test add(3, 3) tobe 6', () => {
  expect(add(3, 3)).toBe(6)
})

test('Test add(3, 3) tobe 9', () => {
  expect(add(3, 3)).toBe(9)
})
