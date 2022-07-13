import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import NaturePeopleTwoToneIcon from '@mui/icons-material/NaturePeopleTwoTone'
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone'
import MosqueTwoToneIcon from '@mui/icons-material/MosqueTwoTone'
import Router from 'next/router'
import { Badge } from '@mui/material'

export default function GobalNavigation() {
  const [value, setValue] = React.useState('messages')

  const handleSwitchTab = (e: React.SyntheticEvent, newValue: string) => {
    Router.push(`/${newValue}`)
    setValue(newValue)
  }

  return (
    <BottomNavigation showLabels value={value} onChange={handleSwitchTab}>
      <BottomNavigationAction
        label="Messages"
        value={'messages'}
        icon={
          <Badge badgeContent={4} color="secondary">
            <ChatTwoToneIcon />
          </Badge>
        }
      />
      <BottomNavigationAction label="Zone" value={''} icon={<NaturePeopleTwoToneIcon />} />
      <BottomNavigationAction label="People" value={'people'} icon={<MosqueTwoToneIcon />} />
    </BottomNavigation>
  )
}
