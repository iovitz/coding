/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { Button, FormControl, Grid, Input, InputLabel, Stack } from '@mui/material'
import { nextServer } from '@/utils/server'
import { PageName } from '@/common/constant'

interface RegisterState {
  username: string
  password: string
  repeat: string
  code: string
}

type PropsType = WithTranslation & {
  switchLoginPages: (pageName: PageName) => void
}

class RegisterComponent extends React.Component<PropsType, RegisterState> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      password: '',
      repeat: '',
      code: '',
    }
  }

  handleInputChange = (key: 'username' | 'password' | 'repeat' | 'code') => {
    return (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      switch (key) {
        case 'username':
          this.setState({
            username: e.currentTarget.value,
          })
          break
        case 'password':
          this.setState({
            password: e.currentTarget.value,
          })
          break
        case 'repeat':
          this.setState({
            repeat: e.currentTarget.value,
          })
          break
        case 'code':
          this.setState({
            code: e.currentTarget.value,
          })
          break
      }
    }
  }

  // async componentDidMount() {}

  render() {
    const { t } = this.props
    const { username, password, repeat, code } = this.state
    return (
      <Stack spacing={2}>
        <FormControl>
          <InputLabel>邮箱：</InputLabel>
          <Input value={username} onChange={this.handleInputChange('username')} />
        </FormControl>
        <FormControl>
          <InputLabel>密码：</InputLabel>
          <Input value={password} onChange={this.handleInputChange('password')} />
        </FormControl>
        <FormControl>
          <InputLabel>重复密码</InputLabel>
          <Input value={repeat} onChange={this.handleInputChange('repeat')} />
        </FormControl>
        <Grid container>
          <Grid item xs={8}>
            <FormControl>
              <InputLabel>邮箱验证码：</InputLabel>
              <Input value={code} aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="large"
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              邮箱验证
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            size="large"
            style={{
              width: '100%',
            }}
          >
            注册
          </Button>
        </Grid>
        <Grid>
          <Button
            size="large"
            variant="outlined"
            style={{
              width: '100%',
            }}
            onClick={() => {
              this.props.switchLoginPages(PageName.Login)
            }}
          >
            返回登录
          </Button>
        </Grid>
      </Stack>
    )
  }
}

const Register = withTranslation()(RegisterComponent)

export default Register
