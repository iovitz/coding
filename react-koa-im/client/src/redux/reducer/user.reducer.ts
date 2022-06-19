import { UserAction } from '../actions/user.action'
import UserActionCreator from '../actions/user.action'
import { UserInfo } from '../../interface/interface'

interface UserState {
  userInfo: UserInfo
}

const defaultState: UserState = {
  userInfo: {
    name: '',
    avatar: '',
    nickname: '',
  },
}

const userReducer = (state = defaultState, action: UserAction): UserState => {
  const { type, payload } = action
  switch (type) {
    case UserActionCreator.SET_USER_INFO: {
      return {
        ...state,
        userInfo: {
          ...payload,
        },
      }
    }
    default: {
      return state
    }
  }
}

export default userReducer
