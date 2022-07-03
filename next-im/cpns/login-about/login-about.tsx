/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import Login from './login/login'
import Register from './register/register'
import Forget from './forget/forget'
import { PageName } from '@/common/constant'

interface LoginAboutState {
  currentPage: PageName
}

type PropsType = WithTranslation

class LoginAboutComponent extends React.Component<PropsType, LoginAboutState> {
  constructor(props: any) {
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
    const { t } = this.props
    return <>{this.renderPages()}</>
  }
}

const LoginAbout = withTranslation()(LoginAboutComponent)

export default LoginAbout
