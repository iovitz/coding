import { Avatar, Cell } from '@taroify/core'
import { Arrow } from '@taroify/icons'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Me() {
  return (
    <>
      <Cell clickable>
        <view className="me-top">
          <Avatar className="me-top-avatar" size="large">
            HP
          </Avatar>
          <view className="me-top-right">
            <view className="me-nickname">暴躁</view>
            <view className="me-autograph">十二月和好运交个朋友</view>
          </view>
        </view>
      </Cell>

      <Cell title="个人信息" style={{ marginTop: '30rpx' }} rightIcon={<Arrow />} clickable />
      <Cell title="账号安全" rightIcon={<Arrow />} clickable />
      <Cell title="系统设置" style={{ marginTop: '30rpx' }} rightIcon={<Arrow />} clickable />
      <Cell title="关于作者" rightIcon={<Arrow />} clickable />
    </>
  )
}
