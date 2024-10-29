import { StoryState } from './types'

export const StoryActionName = 'StoryAction'

class StoryActionCreator {
  // 切换系统组件显影
  static publishStory(payload: StoryState) {
    return {
      type: StoryActionName,
      payload
    }
  }
}

export type StoryAction = {
  type: 'StoryAction'
  payload: Partial<StoryState>
}

export default StoryActionCreator
