import { AppProps } from 'next/app'
import '../styles/globals.scss'
import Head from 'next/head'
import { Provider } from 'react-redux'
import rootStore from '@/store/store'
import AppStateProvider from '@/states/app.state'
import AppFrame from '@/cpns/app-frame/app-frame'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetch('/api/socketio').finally(() => {
      if (typeof window !== 'undefined') {
        const ws = new WebSocket('ws://localhost:29117')
        ws.onopen = () => {
          ws.send('hello')
          ws.onmessage = (ev) => {
            console.log(ev)
          }
        }
      }
    })
  }, [])

  return (
    <AppStateProvider>
      <Provider store={rootStore}>
        <Head>
          <title>Hello</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no, viewport-fit=cover" />
        </Head>
        <AppFrame>
          <Component {...pageProps} />
        </AppFrame>
      </Provider>
    </AppStateProvider>
  )
}

export default MyApp
