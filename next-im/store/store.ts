import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import I18nReducer from './i18n/i18n.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  i18n: I18nReducer,
  user: userReducer,
})

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof rootStore.getState>
export type StoreDispatch = typeof rootStore.dispatch

export default rootStore
