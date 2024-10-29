import UserActionCreator, { UserAction } from './action'
import { UserState } from './types'

const defaultState: UserState = {
  name: '',
  avatar: '',
  nickname: ''
}

const userReducer = (state = defaultState, action: UserAction): UserState => {
  const { type, payload } = action
  switch (type) {
    case UserActionCreator.SET_USER_INFO: {
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

export default userReducer
