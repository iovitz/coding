import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import SettingReducer from './setting/reducer'
import storyReducer from './story/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  setting: SettingReducer,
  user: userReducer,
  story: storyReducer
})

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export type RootState = ReturnType<typeof rootStore.getState>
export type RootDispatch = typeof rootStore.dispatch

export default rootStore
