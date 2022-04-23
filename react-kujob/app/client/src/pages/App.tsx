import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login/Login'
import PageHeader from '../cpns/PageHeader/PageHeader'
import NotFound from './NotFound/NotFound'
import Home from './Home/Home'

function App() {
  return (
    <>
      <PageHeader />
      <main className="pageMain">
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/login" element={Login()} />
          <Route path="*" element={NotFound()} />
        </Routes>
      </main>
    </>
  )
}

export default App
