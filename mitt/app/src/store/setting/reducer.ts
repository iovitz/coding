import SettingActionCreator, { SettingAction } from './action'
import { SystemComponentDisplay } from './types'

const defaultState: SystemComponentDisplay = {
  isShowAppBar: false,
  isShowNavigationBar: false,
  isShowLoginModel: false
}

const settingReducer = (state = defaultState, action: SettingAction): SystemComponentDisplay => {
  const { type, payload } = action
  switch (type) {
    case SettingActionCreator.SWITCH_SYSTEM_COMPONENT_DISPLAY: {
      return {
        ...state,
        ...payload
      }
    }
    default: {
      return state
    }
  }
}

export default settingReducer
