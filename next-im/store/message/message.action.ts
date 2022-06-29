import { Message } from '@/interface/data.types'

class MessageActionCreator {
  // 切换语言
  static readonly SET_NEW_MESSAGES = 'message#SET_NEW_MESSAGES'
  static setNewMessages(payload: Message[]) {
    return {
      type: this.SET_NEW_MESSAGES,
      payload,
    } as const
  }
}

export type MessageAction = ReturnType<typeof MessageActionCreator.setNewMessages>

export default MessageActionCreator
