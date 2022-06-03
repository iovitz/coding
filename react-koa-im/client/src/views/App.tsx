import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import style from './styles.module.scss'
import Messages from './messages'
import Friends from './friends'
import Bzone from './bzone'
import Chat from './chat'
import Home from './home'

function App() {
  return (
    <div className={style.IM_APP}>
      <Routes>
        <Route path="/" element={<Messages />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/bzone" element={<Bzone />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <div className="tab_bar">
        <Link to="messages">to messages</Link>
        <Link to="friends">to friends</Link>
        <Link to="bzone">to bzone</Link>
        <Link to="chat">to chat</Link>
        <Link to="home">to home</Link>
      </div>
    </div>
  )
}

export default App
