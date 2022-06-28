/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app'
import '../styles/globals.scss'
import Head from 'next/head'
import AppBar from 'cpns/app-top-bar/global-header'
import AppNavigation from 'cpns/app-navigation'
import { Drawer } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no, viewport-fit=cover" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
    </>
  )
}

export default MyApp
