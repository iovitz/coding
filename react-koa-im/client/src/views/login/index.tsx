import React from 'react'
import style from './style.module.scss'
import { Input, Button, Space } from 'antd'
import i18nStore from '../../redux/store/i18n.store'
import { WithTranslation, withTranslation } from 'react-i18next'

interface LoginState {
  currentLanguage: string
  languageList: any[]
}

class LoginComponent extends React.Component<WithTranslation, LoginState> {
  constructor(props: any) {
    super(props)
    const i18nState = i18nStore.getState()
    this.state = {
      currentLanguage: i18nState.language,
      languageList: i18nState.languageList,
    }
  }

  componentDidMount() {
    i18nStore.subscribe(() => {
      const i18nState = i18nStore.getState()
      this.setState({
        currentLanguage: i18nState.language,
      })
    })
  }

  handleLogin = () => {
    console.log('Hello')
  }
  render() {
    const { t } = this.props
    console.log(t('login.title'))
    return (
      <article className={style['bbhouse-login']}>
        <h2 className={style['bbhouse-login-title']}>test{t('login.title')}</h2>
        <Space size={20} direction="vertical" style={{ width: '100%' }}>
          <Input size="large" placeholder="Account" prefix="账号" />
          <Input size="large" placeholder="Password" prefix="密码" type="password" />
          <Button type="primary" block onClick={this.handleLogin}>
            Primary
          </Button>
        </Space>

        <Button type="link" block>
          New Account
        </Button>
        <Button type="link" block>
          {this.state.currentLanguage}
        </Button>

        {this.state.languageList.map((item, index) => (
          <p
            key={index}
            onClick={() => {
              i18nStore.dispatch({
                type: 'switch_language',
                payload: item.code,
              })
            }}
          >
            {item.name}
          </p>
        ))}
      </article>
    )
  }
}

const Login = withTranslation()(LoginComponent)

export default Login
