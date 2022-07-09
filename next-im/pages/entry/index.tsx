/* eslint-disable @next/next/no-img-element */
import React from 'react'
import style from './index.module.scss'
import { WithTranslation, withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import SettingActionCreator from '@/store/setting/setting.action'
import { RootState, RootDispatch } from '@/store/store'
import LoginAbout from '@/cpns/login-about/login-about'

const mapStateToProps = (state: RootState) => {
  return {
    currentLanguage: state.setting.language,
    languageList: state.setting.languageList,
  }
}

const mapDispatchToProps = (dispatch: RootDispatch) => {
  return {
    switchLanguageThunk: (language: 'zh' | 'en') => {
      const action: any = SettingActionCreator.switchLanguageThunk(language)
      dispatch(action)
    },
  }
}

interface EntryState {
  username: string
  password: string
  captchaUrl: string
}
type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class EntryComponent extends React.Component<PropsType, EntryState> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      password: '',
      captchaUrl: '',
    }
  }

  handleSelectLanguage = (languageCode: RootState['setting']['language']) => {
    this.props.switchLanguageThunk(languageCode)
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

  render() {
    const { t, languageList, currentLanguage } = this.props
    return (
      <article className={style['next-entry']}>
        <main className={style['next-entry-form']}>
          <h1 style={{ fontSize: '1.5em', margin: '0', paddingLeft: '15px', marginBottom: '20px' }}>NEXT-IM</h1>
          <LoginAbout />
        </main>
        <div className={style['next-entry-language-switcher']}>
          {languageList.map((languageItem) => {
            return (
              <span
                key={languageItem.code}
                onClick={() => {
                  this.handleSelectLanguage(languageItem.code)
                }}
                className={[
                  style['next-language-item'],
                  languageItem.code === currentLanguage ? style['next-language-highlight'] : '',
                ].join(' ')}
              >
                {languageItem.name}
              </span>
            )
          })}
        </div>
      </article>
    )
  }
}

const Entry = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(EntryComponent))

export default Entry
