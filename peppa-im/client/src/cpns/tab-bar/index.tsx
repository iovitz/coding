import { Tab, Tabs } from '@mui/material'
import NaturePeopleTwoToneIcon from '@mui/icons-material/NaturePeopleTwoTone'
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone'
import MosqueTwoToneIcon from '@mui/icons-material/MosqueTwoTone'
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone'

import { useLocation, useNavigate } from 'react-router-dom'

import React from 'react'

function TabBar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleChange = (_: any, value: any) => {
    console.log(value)
    navigate(value)
  }
  return (
    <Tabs value={location.pathname} onChange={handleChange}>
      <Tab icon={<ChatTwoToneIcon />} style={{ flex: 1 }} label="messages" value="/views/messages" />
      <Tab icon={<PeopleAltTwoToneIcon />} style={{ flex: 1 }} label="friends" value="/views/friends" />
      <Tab icon={<NaturePeopleTwoToneIcon />} style={{ flex: 1 }} label="home" value="/views/home" />
      <Tab icon={<MosqueTwoToneIcon />} style={{ flex: 1 }} label="bzone" value="/views/bzone" />
    </Tabs>
  )
}

export default TabBar
