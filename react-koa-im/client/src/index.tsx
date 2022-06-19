import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import AppStateProvider from './states/app.state'
import { Provider } from 'react-redux'
import './i18n/config'
import rootStore from './redux/store'
import 'normalize.css'
import App from './app/app'

const root = ReactDOM.createRoot(document.getElementById('peppa') as HTMLElement)
root.render(
  <React.StrictMode>
    <main className="peppa-app">
      <AppStateProvider>
        <Provider store={rootStore}>
          <App />
        </Provider>
      </AppStateProvider>
    </main>
  </React.StrictMode>,
)
