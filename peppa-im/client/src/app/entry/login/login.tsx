import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import style from './style.module.scss'
import { Alert, Button, FormControl, InputAdornment, TextField } from '@mui/material'
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'

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
          variant="standard"
          autoComplete="off"
          onChange={({ currentTarget }) => {
            setUsername(currentTarget.value)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label={t('entry.password_placeholder')}
          type="password"
          margin="normal"
          size="small"
          value={password}
          variant="standard"
          onChange={({ currentTarget }) => {
            setPassword(currentTarget.value)
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenTwoToneIcon />
              </InputAdornment>
            ),
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
        <Link to="/entry/register" style={{ textDecoration: 'none' }}>
          {t('entry.to_register')}
        </Link>
      </p>
    </>
  )
}
