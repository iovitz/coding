import { ThunkAction } from 'redux-thunk'
import i18n from '../../i18n/config'
import { RootState } from '../store'

class LanguageActionCreator {
  // 切换语言
  static readonly SWITCH_LANGUAGE = 'language#switch_language'
  static switchLanguage(payload: 'zh' | 'en') {
    return {
      type: this.SWITCH_LANGUAGE,
      payload,
    } as const
  }
  static switchLanguageThunk =
    (
      language: 'zh' | 'en',
    ): ThunkAction<void, RootState, unknown, ReturnType<typeof LanguageActionCreator.switchLanguage>> =>
    (dispatch) => {
      i18n.changeLanguage(language)
      console.log(language)
      dispatch(LanguageActionCreator.switchLanguage(language))
    }
}

export type LanguageAction = ReturnType<typeof LanguageActionCreator.switchLanguage>

export default LanguageActionCreator
