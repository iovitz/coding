import Taro from '@tarojs/taro'
import { useState } from 'react'
import { Button, Cell } from '@taroify/core'
import './login.scss'
import Login from './login/login'
import Register from './register/register'

enum Page {
  login = 'login',
  register = 'register',
  forget = 'forget'
}

export default function Entry() {
  const [page, setPage] = useState(Page.login)
  const token = Taro.getStorageSync('token')
  // if (token) {
  //   Taro.redirectTo({
  //     url: '/pages/home/index'
  //   })
  // }
  return (
    <view className="login-container">
      <view className="login-title">WELCOME TO</view>
      <view className="login-title" style={{ marginBottom: '2em' }}>
        miit
      </view>
      <Cell.Group>
        {page === Page.login && <Login></Login>}
        {page === Page.register && <Register></Register>}
        {page === Page.login && (
          <Cell>
            <Button shape="round" block onClick={() => setPage(Page.register)}>
              注册
            </Button>
          </Cell>
        )}
        {page === Page.register && (
          <Cell>
            <Button shape="round" block onClick={() => setPage(Page.login)}>
              登录
            </Button>
          </Cell>
        )}
      </Cell.Group>
    </view>
  )
}
