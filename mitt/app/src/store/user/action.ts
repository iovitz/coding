import { UserState } from './types'

class UserActionCreator {
  // 切换语言
  static readonly SET_USER_INFO = 'user#SET_USER_INFO'
  static setUserInfo(payload: Partial<UserState>) {
    return {
      type: this.SET_USER_INFO,
      payload
    } as const
  }
}

export type UserAction = ReturnType<typeof UserActionCreator.setUserInfo>

export default UserActionCreator
