import React from 'react'
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import Chat from './views/chat/chat'
import Friends from './views/friends/friends'
import Messages from './views/messages/messages'
import Entry from './entry/entry'
import Login from './entry/login/login'
import Register from './entry/register/register'
import Views from './views'
import Bzone from './views/bzone/bzone'
import Home from './views/home/home'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/entry/login" />,
    },
    {
      path: '/entry',
      element: <Entry />,
      children: [
        { path: '/entry', element: <Navigate to="/entry/login" /> },
        { path: '/entry/login', element: <Login /> },
        { path: '/entry/register', element: <Register /> },
        { path: '/entry/*', element: <Navigate to="/entry/login" /> },
      ],
    },
    {
      path: '/views',
      element: <Views />,
      children: [
        { path: '/views', element: <Navigate to="/views/messages" /> },
        { path: '/views/messages', element: <Messages /> },
        { path: '/views/friends', element: <Friends /> },
        { path: '/views/chat', element: <Chat /> },
        { path: '/views/bzone', element: <Bzone /> },
        { path: '/views/home', element: <Home /> },
        { path: '/views/*', element: <Navigate to="/views/messages" /> },
      ],
    },
  ])
  return routes
}

export default App
