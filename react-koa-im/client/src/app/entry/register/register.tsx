import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import style from './style.module.scss'
import { Alert, Button, FormControl, InputAdornment, TextField } from '@mui/material'
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone'

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
          autoComplete="off"
          value={username}
          variant="standard"
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
          autoComplete="off"
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
        <TextField
          label={t('entry.repeat_password_placeholder')}
          type="password"
          margin="normal"
          size="small"
          value={repeat}
          variant="standard"
          onChange={({ currentTarget }) => {
            setRepeat(currentTarget.value)
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
          {t('entry.register_text')}
        </Button>
      </FormControl>
      <p
        style={{
          textAlign: 'center',
        }}
      >
        <Link to="/entry/login" style={{ textDecoration: 'none' }}>
          {t('entry.to_login')}
        </Link>
      </p>
    </>
  )
}
