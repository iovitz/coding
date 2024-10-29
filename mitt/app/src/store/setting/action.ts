import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import { SystemState } from './types'

class SettingActionCreator {
  // 切换系统组件显影
  static readonly SWITCH_SYSTEM_COMPONENT_DISPLAY = 'SWITCH_SYSTEM_COMPONENT_DISPLAY'
  static switchSystemComponentDisplay(payload: SystemState) {
    return {
      type: this.SWITCH_SYSTEM_COMPONENT_DISPLAY,
      payload
    } as const
  }

  static switchSystemComponentDisplayTrunk =
    (payload: SystemState): ThunkAction<void, RootState, unknown, ReturnType<typeof SettingActionCreator.switchSystemComponentDisplay>> =>
    (dispatch) => {
      dispatch(SettingActionCreator.switchSystemComponentDisplay({ ...payload }))
    }
}

export type SettingAction = ReturnType<typeof SettingActionCreator.switchSystemComponentDisplay>

export default SettingActionCreator
