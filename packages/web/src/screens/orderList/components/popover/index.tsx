import React from 'react'
import Popover from '@material-ui/core/Popover'
import { Button, IconButton, List, ListItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

export default function OptionListPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Button onClick={handleClick}>
        <MoreVertIcon></MoreVertIcon>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <List>
          <ListItem>
            <IconButton>
              <EditIcon></EditIcon>
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <DeleteForeverIcon></DeleteForeverIcon>
            </IconButton>
          </ListItem>
        </List>
      </Popover>
    </div>
  )
}
