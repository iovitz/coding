import { Message } from '@/common/type'

class MessageActionCreator {
  static readonly SET_NEW_MESSAGES = 'message#SET_NEW_MESSAGES'
  static setNewMessages(payload: Message[]) {
    return {
      type: this.SET_NEW_MESSAGES,
      payload
    } as const
  }
}

export type MessageAction = ReturnType<typeof MessageActionCreator.setNewMessages>

export default MessageActionCreator
