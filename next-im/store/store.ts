import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import SettingReducer from './setting/setting.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  setting: SettingReducer,
  user: userReducer,
})

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof rootStore.getState>
export type RootDispatch = typeof rootStore.dispatch

export default rootStore
