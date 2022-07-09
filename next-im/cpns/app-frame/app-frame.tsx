import React from 'react'
import AppTopBar from './app-top-bar/app-top-bar'
import AppNavigation from './app-navigation/app-navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import classNames from 'classnames'

interface Props {
  children: JSX.Element
}

const AppFrame: React.FC<Props> = ({ children }) => {
  const UI = useSelector((state: RootState) => {
    return {
      isShowAppBar: state.setting.isShowAppBar,
      isShowNavigationBar: state.setting.isShowNavigationBar,
    }
  })
  return (
    <div
      className={classNames('next-app', {
        'show-appbar': UI.isShowAppBar,
        'show-navigationbar': UI.isShowNavigationBar,
      })}
    >
      {UI.isShowAppBar && (
        <div className="next-app-topbar">
          <AppTopBar />
        </div>
      )}
      <div className="next-app-container">{children}</div>
      {UI.isShowNavigationBar && (
        <div className="next-app-navigation">
          <AppNavigation />
        </div>
      )}
    </div>
  )
}

export default AppFrame
