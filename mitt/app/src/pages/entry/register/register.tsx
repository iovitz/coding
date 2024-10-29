import { userRegister } from '@/common/request/user.request'
import { Button, Cell, Form, Input, Notify } from '@taroify/core'
import Taro from '@tarojs/taro'
import React, { useState } from 'react'

export default function Register() {
  const [nickname, setNickname] = useState('')
  const [uname, setUName] = useState('')
  const [upass, setUPass] = useState('')
  const [repeat, setRepeat] = useState('')
  const [errInfo, setErrInfo] = useState<string | null>('')
  const [success, setSuccess] = useState(false)
  const [requesting, setRequesting] = useState(false)

  const reg = /^[0-9a-zA-Z_]{6,16}$/
  const login = async () => {
    if (requesting) return
    setRequesting(true)
    if (nickname.length < 2 || nickname.length > 20) {
      setErrInfo('名儿格式不对')
    } else if (repeat !== upass) {
      setErrInfo('两次密码不一致')
    } else if (reg.test(uname) && reg.test(upass)) {
      console.log(uname, upass, repeat, nickname)
      setErrInfo(null)
      const res = await userRegister(nickname, uname, upass)
      if (res.code === 200) {
        console.log(res)
        setErrInfo(null)
        setSuccess(true)
        setNickname('')
        setUName('')
        setUPass('')
        setRepeat('')
      } else {
        setErrInfo('登录失败，请检查账号和密码')
      }
    } else {
      setErrInfo('号子或密码格式不对')
    }
    setTimeout(() => {
      setRequesting(false)
    }, 1000)
  }
  return (
    <>
      <Notify open={success || Boolean(errInfo)} color={errInfo ? 'warning' : 'success'}>
        {success ? '注册成功，正在自动登录' : errInfo}
      </Notify>
      <Form.Item name="nickname">
        <Form.Label>昵称</Form.Label>
        <Form.Control>
          <Input
            value={nickname}
            placeholder="2-20个字符"
            onChange={(e) => {
              setNickname(e.detail.value)
            }}
          />
        </Form.Control>
      </Form.Item>
      <Form.Item name="username">
        <Form.Label>账号</Form.Label>
        <Form.Control>
          <Input
            value={uname}
            placeholder="6-16位的字母数字下划线组合"
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
            password
            value={upass}
            placeholder="6-16位的字母数字下划线组合"
            onChange={(e) => {
              setUPass(e.detail.value)
            }}
          />
        </Form.Control>
      </Form.Item>
      <Form.Item name="repeat">
        <Form.Label>重复</Form.Label>
        <Form.Control>
          <Input
            value={repeat}
            password
            placeholder="密码再走一遍"
            onChange={(e) => {
              setRepeat(e.detail.value)
            }}
          />
        </Form.Control>
      </Form.Item>
      <Cell>
        <Button shape="round" disabled={requesting} block color="primary" loading={requesting} formType="submit" onClick={login}>
          注册{requesting && '中...'}
        </Button>
      </Cell>
    </>
  )
}
