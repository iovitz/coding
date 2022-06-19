import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import languageReducer from './reducer/language.reducer'
import messageReducer from './reducer/message.reducer'
import userReducer from './reducer/user.reducer'

const rootReducer = combineReducers({
  language: languageReducer,
  message: messageReducer,
  user: userReducer,
})

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof rootStore.getState>
export type StoreDispatch = typeof rootStore.dispatch

export default rootStore
