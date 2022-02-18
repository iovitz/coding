import { Counter } from './main'

let counter = new Counter()

/**
 * 所有测试用例执行前会调用beforeAll
 */
beforeAll(() => {
  console.log('###before all')
})

/**
 * afterAll 所有测试用例走完之后会打印
 */
afterAll(() => {
  console.log('###after all')
})

/**
 * beforeEach 每个测试用例跑之前执行
 */
beforeEach(() => {
  counter = new Counter()
  console.log('@@@before each')
})

/**
 * beforeEach 每个测试用例跑之后执行
 */
afterEach(() => {
  counter = new Counter()
  console.log('@@@before each')
})

test('测试 Counter 中的 addOne 方法', () => {
  counter.addOne()
  expect(counter.count).toBe(1)
})

test('测试 Counter 中的 minusOne 方法', () => {
  counter.minusOne()
  expect(counter.count).toBe(-1)
})
