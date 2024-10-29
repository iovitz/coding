import { Search, Tabs } from '@taroify/core'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useState } from 'react'
import './index.scss'

export default function Explore() {
  const [tabValue, setTabvalue] = useState(0)
  const current = useSelector((state: RootState) => {
    // console.log(state)
    return state.user.nickname
  })
  return (
    <>
      <Search placeholder="请输入搜索关键词" inputAlign="center" />
      <Tabs value={tabValue} onChange={setTabvalue}>
        <Tabs.TabPane title="热门">内容 {current}</Tabs.TabPane>
        <Tabs.TabPane title="同城">内容 2</Tabs.TabPane>
      </Tabs>
      {tabValue}
    </>
  )
}
