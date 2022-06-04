import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './login'
import Pages from './pages'
import style from './style.module.scss'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Pages />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App
