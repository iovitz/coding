import I18nActions, { I18nAction } from './i18n.action'

interface I18nState {
  language: 'en' | 'zh'
  languageList: Array<{
    name: string
    code: 'en' | 'zh'
  }>
}

const defaultState: I18nState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
}

const I18nReducer = (state = defaultState, action: I18nAction): I18nState => {
  const { type, payload } = action
  switch (type) {
    case I18nActions.SWITCH_LANGUAGE: {
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

export default I18nReducer
