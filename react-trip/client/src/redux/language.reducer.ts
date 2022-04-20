
interface LanguageState {
  language: 'zh' | 'en',
  languageList: {
    name: string
    code: string
  }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {name: '中文', code: 'zh'},
    {name: '英文', code: 'en'},
  ]
}

export default (state = defaultState, action) => {
  return state
}