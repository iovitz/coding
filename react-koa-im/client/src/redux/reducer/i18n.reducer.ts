interface I18nState {
  language: 'en' | 'zh'
  languageList: Array<{
    name: string
    code: string
  }>
}

const defaultState: I18nState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: '英文', code: 'en' },
  ],
}

const i18nReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'switch_language':
      return {
        ...state,
        language: action.payload,
      }
  }
  return state
}

export default i18nReducer
