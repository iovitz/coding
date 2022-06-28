import { AccountCircle } from '@mui/icons-material'
import { Button, Input, InputAdornment, TextField } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
      <Button>Hello</Button>
    </>
  )
}

export default Home
