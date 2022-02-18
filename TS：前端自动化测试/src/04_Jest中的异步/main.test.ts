import { asyncFunc, errorAsyncFunc } from './main'

test('测试异步1', async () => {
  asyncFunc().then(res => {
    expect(res).toBe(100)
  })
})

test('测试异步2', async () => {
  const res = await asyncFunc()
  expect(res).toBe(100)
})

// test('测试异步3', async () => {
//   errorAsyncFunc().catch(e => {
//     expect(e.toString().indexOf('504') > -1).toBe(true)
//   })
// })
