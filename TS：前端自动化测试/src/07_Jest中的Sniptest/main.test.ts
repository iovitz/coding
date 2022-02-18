import { generateConfig } from './main'

test('test', () => {
  expect(generateConfig()).toEqual({
    port: 'localhost',
    path: '/test'
  })
})
