import { Fab } from '@material-ui/core'
import React from 'react'
import ListIcon from '@material-ui/icons/List'

export const ListButton = () => {
  const handleMouseEvent = () => {}
  return (
    <Fab
      onMouseOver={handleMouseEvent}
      sx={{
        backgroundColor: 'blue',
        color: 'white',
        position: 'absolute',
        transform: 'translate(10px, -60px)'
      }}
    >
      <ListIcon></ListIcon>
    </Fab>
  )
}
