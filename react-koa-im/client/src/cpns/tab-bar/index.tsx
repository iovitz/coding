import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

function TabBar() {
  return (
    <nav className={style['bbhouse-tab-bar']}>
      <Link className={style['bbhouse-tab-link']} to="messages">
        messages
      </Link>
      <Link className={style['bbhouse-tab-link']} to="friends">
        friends
      </Link>
      <Link className={style['bbhouse-tab-link']} to="bzone">
        bzone
      </Link>
    </nav>
  )
}

export default TabBar
