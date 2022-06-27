import type { NextPage } from 'next'
import styles from './index.module.scss'
import { Page, Navbar, Block, Button, List, ListItem, BlockTitle } from 'konsta/react'

const Home: NextPage = () => {
  return (
    <Page>
      <Navbar title="My App" />
      <Block strong>
        <p>Here is your Next.js & Konsta UI app. Lets see what we have here.</p>
      </Block>
      <BlockTitle>Navigation</BlockTitle>
      <List>
        <ListItem href="/about/" title="About" />
        <ListItem href="/form/" title="Form" />
      </List>

      <Block strong className="flex space-x-4">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Block>
    </Page>
  )
}

export default Home
