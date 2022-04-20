import React from 'react'
import PageHeader from '../cpns/page-header'
import { Route, Routes } from 'react-router-dom'
import  {Home} from './home'
import NotFound from './not-found'

function App() {
  return (
    <div className='App'>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <PageHeader></PageHeader>
    </div>
  )
}

export default App
