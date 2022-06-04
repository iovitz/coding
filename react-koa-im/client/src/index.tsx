import React from 'react'
import ReactDOM from 'react-dom/client'
import Views from './views'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import './styles/index.scss'
import AppStateProvider from './states/app.state'

const root = ReactDOM.createRoot(document.getElementById('BBHOUSE') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="bbhouse_pages">
        <AppStateProvider>
          <Views />
        </AppStateProvider>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
