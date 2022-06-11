import { Button, Form, Input, Space } from 'antd-mobile'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import style from './style.module.scss'

export default function Login() {
  const { t } = useTranslation()
  return (
    <>
      <Form layout="vertical">
        <Space direction="vertical" block style={{ '--gap': '24px' }}>
          <Form.Item label={t('entry.username')} name="username">
            <Input placeholder={t('entry.username_placeholder')} clearable />
          </Form.Item>
          <Form.Item label={t('entry.password')} name="password">
            <Input placeholder={t('entry.password_placeholder')} clearable type="password" />
          </Form.Item>

          <Button block color="primary" size="large" style={{ width: '100%' }}>
            {t('entry.login_text')}
          </Button>
        </Space>
      </Form>

      <Space justify="between" block style={{ padding: '24px 0' }}>
        <Link to="/entry/forget" className={style['bboouse-entry-link']}>
          {t('entry.forget_password')}
        </Link>
        <Link to="/entry/register" className={style['bboouse-entry-link']}>
          {t('entry.create_new')}
        </Link>
      </Space>
    </>
  )
}
