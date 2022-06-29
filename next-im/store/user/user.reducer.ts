import { UserAction } from './user.action'
import UserActionCreator from './user.action'
import { UserInfo } from '@/types/data.types'

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
