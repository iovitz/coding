import { Tab, Tabs } from '@mui/material'
import NaturePeopleTwoToneIcon from '@mui/icons-material/NaturePeopleTwoTone'
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone'
import MosqueTwoToneIcon from '@mui/icons-material/MosqueTwoTone'
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone'

import React, { useState } from 'react'

function TabBar() {
  const [value, setValue] = useState('messages')
  const handleChange = () => {
    console.log(value)
  }
  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab icon={<ChatTwoToneIcon />} style={{ flex: 1 }} label="messages" value="messages" />
      <Tab icon={<NaturePeopleTwoToneIcon />} style={{ flex: 1 }} label="friends" value="friends" />
      <Tab icon={<PublicTwoToneIcon />} style={{ flex: 1 }} label="world" value="world" />
      <Tab icon={<MosqueTwoToneIcon />} style={{ flex: 1 }} label="bzone" value="bzone" />
    </Tabs>
  )
}

export default TabBar
