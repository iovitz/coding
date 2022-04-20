import { add } from './func'

test('测试内容相等: 原始值', () => {
  expect(add(10, 20)).toBe(30)
})

test('测试内容相等: 浮点数', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3)
})

test('测试内容相等: 引用值', () => {
  const o = {}
  // expect(o).toBe({})
  expect(o).toEqual({})
})

test('测试真假: null', () => {
  const n = null
  expect(n).toBeNull()
})

test('测试真假: undefined', () => {
  let n
  expect(n).toBeUndefined()
})
