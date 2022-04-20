import todo from '../index.vue'
import { shallowMount } from '@vue/test-utils'

describe('测试 todo', () => {
  it('组件渲染正常', () => {
    const wrapper = shallowMount(todo)
  })
})
