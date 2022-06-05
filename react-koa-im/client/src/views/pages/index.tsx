import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Messages from './messages'
import Friends from './friends'
import Bzone from './bzone'
import Chat from './chat'
import Home from './home'
import style from './styles.module.scss'
import TabBar from '../../cpns/tab-bar'

function Pages() {
  return (
    <div className={style['bbhouse-pages']}>
      <div className={style['bbhouse-pages-scroll-container']}>
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/bzone" element={<Bzone />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Navigate to="/b/messages" />} />
        </Routes>
      </div>
      <TabBar />
    </div>
  )
}

export default Pages
