import LanguageActions, { LanguageAction } from '../actions/language.action'

interface LanguageState {
  language: 'en' | 'zh'
  languageList: Array<{
    name: string
    code: 'en' | 'zh'
  }>
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
}

const languageReducer = (state = defaultState, action: LanguageAction): LanguageState => {
  const { type, payload } = action
  switch (type) {
    case LanguageActions.SWITCH_LANGUAGE: {
      const language = payload === 'en' ? 'en' : 'zh'
      return {
        ...state,
        language,
      }
    }
    default: {
      return state
    }
  }
}

export default languageReducer
