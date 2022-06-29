import { ThunkAction } from 'redux-thunk'
import i18n from '@/i18n/i18n'
import { RootState } from '../store'

class I18nActionCreator {
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
    ): ThunkAction<void, RootState, unknown, ReturnType<typeof I18nActionCreator.switchLanguage>> =>
    (dispatch) => {
      i18n.changeLanguage(language)
      console.log(language)
      dispatch(I18nActionCreator.switchLanguage(language))
    }
}

export type I18nAction = ReturnType<typeof I18nActionCreator.switchLanguage>

export default I18nActionCreator
