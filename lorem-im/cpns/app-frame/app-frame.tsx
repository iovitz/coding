import React from 'react'
import AppTopBar from './app-top-bar/app-top-bar'
import AppNavigation from './app-navigation/app-navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import classNames from 'classnames'
import { Box, Modal, Typography } from '@mui/material'
import LoginModal from './login-modal/login-modal'

interface Props {
  children: JSX.Element
}

const AppFrame: React.FC<Props> = ({ children }) => {
  const UI = useSelector((state: RootState) => {
    return {
      isShowAppBar: state.setting.isShowAppBar,
      isShowNavigationBar: state.setting.isShowNavigationBar,
      isShowLoginModel: state.setting.isShowLoginModel,
    }
  })
  console.log(UI.isShowLoginModel)
  return (
    <>
      <LoginModal open={UI.isShowLoginModel} />
      <div
        className={classNames('LOREM_APP', {
          'show-appbar': UI.isShowAppBar,
          'show-navigationbar': UI.isShowNavigationBar,
        })}
      >
        {UI.isShowAppBar && (
          <div className="LOREM_APP-topbar">
            <AppTopBar />
          </div>
        )}
        <div className="LOREM_APP-container">{children}</div>
        {UI.isShowNavigationBar && (
          <div className="LOREM_APP-navigation">
            <AppNavigation />
          </div>
        )}
      </div>
    </>
  )
}

export default AppFrame
