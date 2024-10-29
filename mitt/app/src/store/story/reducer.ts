import { StoryActionName, StoryAction } from './action'
import { StoryState } from './types'

const defaultState: StoryState = {
  pablishingStory: []
}

const storyReducer = (state = defaultState, action: StoryAction): StoryState => {
  const { type, payload } = action
  switch (type) {
    case StoryActionName: {
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

export default storyReducer
