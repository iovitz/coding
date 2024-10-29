import Taro from '@tarojs/taro'
import { useDispatch } from 'react-redux'
import UserActionCreator from '@/store/user/action'
import { Cell, Avatar } from '@taroify/core'
import './index.scss'

export default function Friends() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(
      UserActionCreator.setUserInfo({
        nickname: '123'
      })
    )
  }
  return (
    <>
      <button onClick={handleClick}>click</button>
      {new Array(20).fill(1).map((_, idx) => (
        <Cell clickable key={idx}>
          123123123
        </Cell>
      ))}
    </>
  )
}
