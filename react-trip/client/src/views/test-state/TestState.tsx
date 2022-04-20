import { Input, Layout, Typography } from 'antd'
import React from 'react'
import styles from './TestState.module.css'


export default function TestState() {
  return (
    <>
    <div className={styles.red}>
      <Layout.Header>
        <Typography.Title level={3}>React</Typography.Title>
        <Input.Search></Input.Search>
      </Layout.Header>
    </div>
    </>
  )
}
