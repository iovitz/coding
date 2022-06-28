import React from 'react'
import style from './index.module.scss'
import { WithTranslation, withTranslation } from 'react-i18next'
import BrightnessHighTwoToneIcon from '@mui/icons-material/BrightnessHighTwoTone'
import { connect } from 'react-redux'
import I18nActionCreator from '@/store/i18n/i18n.action'
import { RootState, StoreDispatch } from '@/store/store'

const mapStateToProps = (state: RootState) => {
  return {
    currentLanguage: state.i18n.language,
    languageList: state.i18n.languageList,
  }
}

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    switchLanguageThunk: (language: 'zh' | 'en') => {
      const action: any = I18nActionCreator.switchLanguageThunk(language)
      dispatch(action)
    },
  }
}

interface EntryState {
  name: string
}
type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class EntryComponent extends React.Component<PropsType, EntryState> {
  constructor(props: any) {
    super(props)
  }

  handleSelectLanguage = (languageCode: RootState['i18n']['language']) => {
    this.props.switchLanguageThunk(languageCode)
  }

  render() {
    const { t, languageList, currentLanguage } = this.props
    return (
      <article className={style['peppa-entry']}>
        <main className={style['peppa-entry-form']}>
          <p style={{ textAlign: 'center' }}>
            <BrightnessHighTwoToneIcon style={{ fontSize: '100px' }} />
          </p>
          {/* <Outlet /> */}
        </main>
        <div className={style['peppa-entry-language-switcher']}>
          {languageList.map((languageItem) => {
            return (
              <span
                key={languageItem.code}
                onClick={() => {
                  this.handleSelectLanguage(languageItem.code)
                }}
                className={[
                  style['peppa-language-item'],
                  languageItem.code === currentLanguage ? style['peppa-language-highlight'] : '',
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
