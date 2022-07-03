import React from 'react'
import AppTopBar from './app-top-bar/app-top-bar'
import AppNavigation from './app-navigation/app-navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const AppFrame: React.FC<any> = ({ children }) => {
  const UI = useSelector((state: RootState) => {
    return {
      appbar: state.setting.isShowAppBar,
      navigation: state.setting.isShowNavigation,
    }
  })
  return (
    <div className="next-app">
      {UI.appbar && (
        <div className="next-app-topbar">
          <AppTopBar />
        </div>
      )}
      <div className="next-app-container">{children}</div>
      {UI.navigation && (
        <div className="next-app-navigation">
          <AppNavigation />
        </div>
      )}
    </div>
  )
}

export default AppFrame
