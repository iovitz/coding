import { runCallback } from './main'

test('测试 runCallback 函数的调用', () => {
  const func = jest.fn().mockReturnValue('10')
  runCallback(func)
  expect(func).toBeCalled()
  console.log(func.mock)
})
