import { generateConfig } from './main'

test('test', () => {
  expect(generateConfig()).toMatchSnapshot()
})
