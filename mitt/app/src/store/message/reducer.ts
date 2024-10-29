import { Message } from '@/common/type'
import MessageActionCreator, { MessageAction } from './action'

interface LanguageState {
  isHasNewMessageNotRead: boolean
  messageList: Message[]
}

const defaultState: LanguageState = {
  isHasNewMessageNotRead: false,
  messageList: []
}

const messageReducer = (state = defaultState, action: MessageAction): LanguageState => {
  const { type, payload } = action
  switch (type) {
    case MessageActionCreator.SET_NEW_MESSAGES: {
      const { messageList } = state
      return {
        ...state,
        messageList: [...payload, ...messageList]
      }
    }
    default: {
      return state
    }
  }
}

export default messageReducer
