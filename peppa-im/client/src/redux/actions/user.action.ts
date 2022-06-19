import { ThunkAction } from 'redux-thunk'
import { UserInfo } from '../../interface/interface'
import { RootState } from '../store'

class UserActionCreator {
  // 切换语言
  static readonly SET_USER_INFO = 'user#SET_USER_INFO'
  static setUserInfo(payload: UserInfo) {
    return {
      type: this.SET_USER_INFO,
      payload,
    } as const
  }
  static switchLanguageThunk =
    (userInfo: UserInfo): ThunkAction<void, RootState, unknown, ReturnType<typeof this.setUserInfo>> =>
    async (dispatch) => {
      dispatch(this.setUserInfo(userInfo))
    }
}

export type UserAction = ReturnType<typeof UserActionCreator.setUserInfo>

export default UserActionCreator
