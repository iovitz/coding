import SettingActionCreator, { SettingAction } from './setting.action'

export interface SystemComponentDisplay {
  isShowAppBar: boolean
  isShowNavigationBar: boolean
  isShowLoginModel: boolean
}

interface SettingState extends SystemComponentDisplay {
  language: 'en' | 'zh'
  languageList: Array<{
    name: string
    code: 'en' | 'zh'
  }>
}

const defaultState: SettingState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
  isShowAppBar: false,
  isShowNavigationBar: false,
  isShowLoginModel: false,
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
    case SettingActionCreator.SWITCH_SYSTEM_COMPONENT_DISPLAY: {
      return {
        ...state,
        ...payload,
      }
    }
    default: {
      return state
    }
  }
}

export default SettingReducer
