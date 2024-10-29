import { Tabbar, Badge } from '@taroify/core'
import { FriendsOutlined, UserOutlined, GuideOutlined, Edit } from '@taroify/icons'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import Explore from './explore'
import Friends from './friends'
import Me from './me'
import './index.scss'

export default function AppFrame() {
  const [tabIndex, setTabIndex] = useState(2)

  const goPublish = () => {
    Taro.navigateTo({
      url: '/pages/publish/index'
    })
  }
  return (
    <div className="app-container">
      <div className="page-container">
        {tabIndex === 0 && <Friends />}
        {tabIndex === 1 && <Explore />}
        {tabIndex === 2 && <Me />}
      </div>
      <Tabbar
        defaultValue={tabIndex}
        onChange={(v) => {
          setTabIndex(v)
        }}
      >
        <Tabbar.TabItem badge={<Badge content={100} max={99} />} value={0} icon={<FriendsOutlined />}>
          好友
        </Tabbar.TabItem>
        {tabIndex !== 1 ? (
          <Tabbar.TabItem badge value={1} icon={<GuideOutlined />}>
            星球
          </Tabbar.TabItem>
        ) : (
          <Tabbar.TabItem value={1} onClick={goPublish} icon={<Edit />}>
            发布
          </Tabbar.TabItem>
        )}
        <Tabbar.TabItem value={2} icon={<UserOutlined />}>
          哦吼
        </Tabbar.TabItem>
      </Tabbar>
    </div>
  )
}
