import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SettingActionCreator from '@/store/setting/setting.action'

const AlignItemsListComponent: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      SettingActionCreator.switchSystemComponentDisplayTrunk({
        isShowAppBar: true,
        isShowNavigationBar: true,
      }) as any,
    )
  })
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" secondary="1233333333333333" />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" secondary="1233333333333333" />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" secondary="1233333333333333" />
      </ListItem>
    </List>
  )
}

export default AlignItemsListComponent
