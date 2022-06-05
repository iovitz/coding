import i18nReducer from '../reducer/i18n.reducer'
import { configureStore } from '@reduxjs/toolkit'

const i18nStore = configureStore({
  reducer: i18nReducer,
})

export default i18nStore
