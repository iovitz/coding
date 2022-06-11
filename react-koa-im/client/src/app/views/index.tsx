import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Messages from './messages'
import Friends from './friends'
import Bzone from './bzone'
import Chat from './chat'
import Home from './home'
import style from './styles.module.scss'
import TabBar from '../../cpns/tab-bar'

function Views() {
  return (
    <div className={style['bbhouse-pages']}>
      <div className={style['bbhouse-pages-scroll-container']}>
        <Outlet />
      </div>
      <TabBar />
    </div>
  )
}

export default Views
