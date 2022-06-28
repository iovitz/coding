import { AppProps } from 'next/app'
import '../styles/globals.scss'
import Head from 'next/head'
import AppBar from 'cpns/app-top-bar/global-header'
import AppNavigation from 'cpns/app-navigation'
import { Provider } from 'react-redux'
import rootStore from '@/store/store'
import AppStateProvider from '@/states/app.state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <Provider store={rootStore}>
        <Head>
          <title>Hello</title>
        </Head>
        <div className="next-app">
          <div className="next-app-topbar">
            <AppBar />
          </div>
          <div className="next-app-container">
            <Component {...pageProps} />
          </div>
          <div className="next-app-navigation">
            <AppNavigation />
          </div>
        </div>
      </Provider>
    </AppStateProvider>
  )
}

export default MyApp
