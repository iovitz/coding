import { useState } from 'react'
import { userLogin } from '@/common/request/user.request'
import { Button, Notify, Input, Form, Toast, Cell } from '@taroify/core'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Login() {
  const [uname, setUName] = useState('')
  const [upass, setUPass] = useState('')
  const [errInfo, setErrInfo] = useState<string | null>('')
  const [success, setSuccess] = useState(false)
  const [requesting, setRequesting] = useState(false)

  const reg = /^[0-9a-zA-Z_]{6,16}$/
  const login = async () => {
    if (requesting) return
    setRequesting(true)
    if (reg.test(uname) && reg.test(upass)) {
      setErrInfo(null)
      const res = await userLogin(uname, upass)
      if (res.code === 200) {
        setErrInfo(null)
        setSuccess(true)
        setTimeout(() => {
          Taro.redirectTo({
            url: '/pages/home/index'
          })
        }, 1000)
        return
      }
    }
    setErrInfo('账号密码记差了大兄弟')
    setTimeout(() => {
      setRequesting(false)
    }, 1000)
  }
  return (
    <>
      <Notify open={success || Boolean(errInfo)} color={errInfo ? 'warning' : 'success'}>
        {success ? '登录成功' : errInfo}
      </Notify>
      <Form.Item name="username">
        <Form.Label>账号</Form.Label>
        <Form.Control>
          <Input
            value={uname}
            placeholder="登录账号"
            onChange={(e) => {
              setUName(e.detail.value)
            }}
          />
        </Form.Control>
      </Form.Item>
      <Form.Item name="password">
        <Form.Label>密码</Form.Label>
        <Form.Control>
          <Input
            value={upass}
            password
            placeholder="登录密码"
            onChange={(e) => {
              setUPass(e.detail.value)
            }}
          />
        </Form.Control>
      </Form.Item>
      <Cell>
        <Button shape="round" disabled={requesting} block color="primary" loading={requesting} formType="submit" onClick={login}>
          登录{requesting && '中...'}
        </Button>
      </Cell>
    </>
  )
}
