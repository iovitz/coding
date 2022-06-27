import type { NextPage } from 'next'
import styles from './index.module.scss'
import { Page } from 'konsta/react'

const Home: NextPage = ({ children }) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default Home
