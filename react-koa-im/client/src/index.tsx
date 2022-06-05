import React from 'react'
import ReactDOM from 'react-dom/client'
import Views from './views'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import './styles/index.scss'
import AppStateProvider from './states/app.state'
import { Provider } from 'react-redux'
import './i18n/config'
import i18nStore from './redux/store/i18n.store'

const root = ReactDOM.createRoot(document.getElementById('BBHOUSE') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="bbhouse_pages">
        <AppStateProvider>
          <Provider store={i18nStore}>
            <Views />
          </Provider>
        </AppStateProvider>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
