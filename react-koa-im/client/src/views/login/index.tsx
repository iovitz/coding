import React, { ReactEventHandler, SyntheticEvent, useState } from 'react'
import style from './style.module.scss'
import { Input, Button, Space } from 'antd'

const Login = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Hello')
  }

  return (
    <article className={style['bbhouse-login']}>
      <h2 className={style['bbhouse-login-title']}>BBH_ouse</h2>
      <Space size={20} direction="vertical" style={{ width: '100%' }}>
        <Input
          size="large"
          placeholder="Account"
          prefix="账号"
          value={account}
          onInput={(e: SyntheticEvent<HTMLInputElement>) => {
            const input = e.target as HTMLInputElement
            setAccount(input.value)
          }}
        />
        <Input
          size="large"
          placeholder="Password"
          prefix="密码"
          type="password"
          value={password}
          onInput={(e: SyntheticEvent<HTMLInputElement>) => {
            const input = e.target as HTMLInputElement
            setPassword(input.value)
          }}
        />
        <Button type="primary" block onClick={handleLogin}>
          Primary
        </Button>
      </Space>

      <Button type="link" block>
        New Account
      </Button>
    </article>
  )
}

export default Login
