/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import Login from './login/login'
import Register from './register/register'
import Forget from './forget/forget'
import { PageName } from '@/common/constant'
import { Dialog } from '@mui/material'
import style from './style.module.scss'

interface LoginAboutState {
  currentPage: PageName
}

type PropsType = WithTranslation & {
  open: boolean
}

class LoginModelComponent extends React.Component<PropsType, LoginAboutState> {
  constructor(props: PropsType) {
    super(props)
    this.state = {
      currentPage: PageName.Login,
    }
  }
  switchLoginPages = (pageName: PageName) => {
    this.setState({
      currentPage: pageName,
    })
  }

  renderPages() {
    switch (this.state.currentPage) {
      case PageName.Register:
        return <Register switchLoginPages={this.switchLoginPages} />
      case PageName.Forget:
        return <Forget switchLoginPages={this.switchLoginPages} />
      default:
        return <Login switchLoginPages={this.switchLoginPages} />
    }
  }

  render() {
    return (
      <Dialog open={this.props.open} className={style['lorem-login-modal']}>
        <div className={style['lorem-login-modal']}>{this.renderPages()}</div>
      </Dialog>
    )
  }
}

const LoginModal = withTranslation()(LoginModelComponent)

export default LoginModal
