/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { Button, FormControl, Grid, Input, InputLabel, Stack } from '@mui/material'
import { nextServer } from '@/utils/server'
import { PageName } from '@/common/constant'

interface LoginState {
  username: string
  password: string
  captchaUrl: string
}

type PropsType = WithTranslation & {
  switchLoginPages: (pageName: PageName) => void
}

class LoginComponent extends React.Component<PropsType, LoginState> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      password: '',
      captchaUrl: '',
    }
  }

  handleNewCapcha = async () => {
    const captchaUrl = await nextServer.get<{ url: string }>('/user/getCaptcha?width=100&height=45')
    console.log(captchaUrl)
    this.setState({
      captchaUrl: captchaUrl.url,
    })
  }

  handleInputChange = (key: 'username' | 'password') => {
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
      }
    }
  }

  async componentDidMount() {
    await this.handleNewCapcha()
  }

  render() {
    const { t } = this.props
    const { captchaUrl, username, password } = this.state
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
        <Grid container>
          <Grid item xs={8}>
            <FormControl>
              <InputLabel>验证码：</InputLabel>
              <Input aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <div
              onClick={this.handleNewCapcha}
              dangerouslySetInnerHTML={{
                __html: captchaUrl,
              }}
            ></div>
          </Grid>
        </Grid>
        <Grid>
          <Button
            size="large"
            variant="contained"
            style={{
              width: '100%',
            }}
          >
            登录
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
              this.props.switchLoginPages(PageName.Register)
            }}
          >
            注册账号
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
              this.props.switchLoginPages(PageName.Forget)
            }}
          >
            忘记密码
          </Button>
        </Grid>
      </Stack>
    )
  }
}

const Login = withTranslation()(LoginComponent)

export default Login
