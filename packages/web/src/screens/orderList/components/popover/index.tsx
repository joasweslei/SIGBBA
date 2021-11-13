import React from 'react'
import Popover from '@mui/material/Popover'
import { Button, IconButton, List, ListItem } from '@mui/material'
import { DeleteForever, Edit, MoreVert } from '@mui/icons-material'

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
        <MoreVert></MoreVert>
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
              <Edit></Edit>
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <DeleteForever></DeleteForever>
            </IconButton>
          </ListItem>
        </List>
      </Popover>
    </div>
  )
}
