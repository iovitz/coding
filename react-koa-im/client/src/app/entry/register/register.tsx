import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import style from './style.module.scss'
import { Alert, Button, FormControl, TextField } from '@mui/material'

export default function Register() {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeat, setRepeat] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    // const emailReg = /^\d+@\d+\.\d+$/
    // if (!emailReg.test(username)) {
    //   setError('账号必须为邮箱')
    // }
  }

  return (
    <>
      <FormControl fullWidth={true} size="small" margin="dense">
        <TextField
          id="standard-basic"
          label={t('entry.username_placeholder')}
          margin="normal"
          size="small"
          value={username}
          onChange={({ currentTarget }) => {
            setUsername(currentTarget.value)
          }}
        />
        <TextField
          label={t('entry.password_placeholder')}
          type="password"
          margin="normal"
          size="small"
          value={password}
          onChange={({ currentTarget }) => {
            setPassword(currentTarget.value)
          }}
        />
        <TextField
          label={t('entry.repeat_password_placeholder')}
          type="password"
          margin="normal"
          size="small"
          value={repeat}
          onChange={({ currentTarget }) => {
            setRepeat(currentTarget.value)
          }}
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: '10px',
          }}
        >
          {t('entry.register_text')}
        </Button>
      </FormControl>
      <p
        style={{
          textAlign: 'center',
        }}
      >
        <Link to="/entry/login">{t('entry.to_login')}</Link>
      </p>
    </>
  )
}
