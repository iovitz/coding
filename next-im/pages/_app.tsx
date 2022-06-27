import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { App } from 'konsta/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App theme="ios" dark={false}>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
