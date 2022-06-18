import React from 'react'
import style from './style.module.scss'
import { WithTranslation, withTranslation } from 'react-i18next'
import { RootState, StoreDispatch } from '../../redux/store'
import LanguageActionCreator from '../../redux/actions/language.action'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'

const mapStateToProps = (state: RootState) => {
  return {
    currentLanguage: state.language.language,
    languageList: state.language.languageList,
  }
}

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    switchLanguageThunk: (language: 'zh' | 'en') => {
      const action: any = LanguageActionCreator.switchLanguageThunk(language)
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

  handleSelectLanguage = (languageCode: RootState['language']['language']) => {
    this.props.switchLanguageThunk(languageCode)
  }

  render() {
    const { t, languageList, currentLanguage } = this.props
    return (
      <article className={style['bbhouse-entry']}>
        <h2 className={style['bbhouse-entry-title']}>{t('entry.title')}</h2>
        <main className={style['bbhouse-entry-form']}>
          <Outlet />
        </main>
        <div className={style['bbhouse-entry-language-switcher']}>
          {languageList.map((languageItem) => {
            return (
              <span
                key={languageItem.code}
                onClick={() => {
                  this.handleSelectLanguage(languageItem.code)
                }}
                className={[
                  style['bbhouse-language-item'],
                  languageItem.code === currentLanguage ? style['bbhouse-language-highlight'] : '',
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
