import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import style from './style.module.scss'
import { Alert, Button, FormControl, TextField } from '@mui/material'

export default function Login() {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
        {error && <Alert severity="error">{error}</Alert>}
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: '10px',
          }}
        >
          {t('entry.login_text')}
        </Button>
      </FormControl>

      <p
        style={{
          textAlign: 'center',
        }}
      >
        <Link to="/entry/register">{t('entry.to_register')}</Link>
      </p>
    </>
  )
}
