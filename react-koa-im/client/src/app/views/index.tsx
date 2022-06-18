import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './styles.module.scss'
import TabBar from '../../cpns/tab-bar'

function Views() {
  return (
    <div className={style['bbhouse-pages']}>
      <div className={style['bbhouse-pages-scroll-container']}>
        <Outlet />
      </div>
      <div className={style['bbhouse-pages-nav-bar']}>
        <TabBar />
      </div>
    </div>
  )
}

export default Views
