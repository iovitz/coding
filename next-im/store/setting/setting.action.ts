import { ThunkAction } from 'redux-thunk'
import i18n from '@/i18n/i18n'
import { RootState } from '../store'
import { SystemComponentDisplay } from './setting.reducer'

class SettingActionCreator {
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
    ): ThunkAction<void, RootState, unknown, ReturnType<typeof SettingActionCreator.switchLanguage>> =>
    (dispatch) => {
      i18n.changeLanguage(language)
      dispatch(SettingActionCreator.switchLanguage(language))
    }

  // 切换系统组件显影
  static readonly SWITCH_SYSTEM_COMPONENT_DISPLAY = 'SWITCH_SYSTEM_COMPONENT_DISPLAY'
  static switchSystemComponentDisplay(payload: Partial<SystemComponentDisplay>) {
    return {
      type: this.SWITCH_SYSTEM_COMPONENT_DISPLAY,
      payload,
    } as const
  }
  static switchSystemComponentDisplayTrunk =
    (
      payload: Partial<SystemComponentDisplay>,
    ): ThunkAction<void, RootState, unknown, ReturnType<typeof SettingActionCreator.switchSystemComponentDisplay>> =>
    (dispatch) => {
      dispatch(SettingActionCreator.switchSystemComponentDisplay({ ...payload }))
    }
}

export type SettingAction =
  | ReturnType<typeof SettingActionCreator.switchLanguage>
  | ReturnType<typeof SettingActionCreator.switchSystemComponentDisplay>

export default SettingActionCreator
