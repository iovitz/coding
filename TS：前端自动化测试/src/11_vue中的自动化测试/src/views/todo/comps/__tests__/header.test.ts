import { shallowMount } from '@vue/test-utils'
import todoHeader from '../todo-header.vue'

it('todo-header 包含 input 框', () => {
  const wrapper = shallowMount(todoHeader)
  const input = wrapper.find('.search-text')
  expect(input.exists()).toBe(true)
})

it('todo-haeder 中 input 框初始值为空', () => {
  const wrapper = shallowMount(todoHeader) as any
  const inputValue = wrapper.vm.$data.searchText
  expect(inputValue).toBe('')
})

it('todo-haeder 中当文本框内容为空的时候，不派发 add 事件', () => {
  const wrapper = shallowMount(todoHeader) as any
  const input = wrapper.find('.search-text')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})


it('todo-haeder 中当文本框有内容时，按下回车派发 add 事件', () => {
  const wrapper = shallowMount(todoHeader) as any
  const input = wrapper.find('.search-text')
  input.setValue('words')
  input.trigger('keyup.enter')
  console.log(wrapper.emitted())
  expect(wrapper.emitted().add).toBeTruthy()
})
