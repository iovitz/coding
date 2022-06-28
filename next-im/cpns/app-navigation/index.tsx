import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ArchiveIcon from '@mui/icons-material/Archive'
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
            <RestoreIcon />
          </Badge>
        }
      />
      <BottomNavigationAction label="Zone" value={'zone'} icon={<FavoriteIcon />} />
      <BottomNavigationAction label="People" value={'people'} icon={<ArchiveIcon />} />
    </BottomNavigation>
  )
}
