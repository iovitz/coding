import SettingActionCreator, { SettingAction } from './setting.action'

interface SettingState {
  language: 'en' | 'zh'
  languageList: Array<{
    name: string
    code: 'en' | 'zh'
  }>

  isShowAppBar: boolean
  isShowNavigation: boolean
}

const defaultState: SettingState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
  isShowAppBar: false,
  isShowNavigation: false,
}

const SettingReducer = (state = defaultState, action: SettingAction): SettingState => {
  const { type, payload } = action
  switch (type) {
    case SettingActionCreator.SWITCH_LANGUAGE: {
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

export default SettingReducer
