import { Fab, List } from '@mui/material'
import React from 'react'

import { useHistory } from 'react-router-dom'

export function ListButton(props: any) {
  const history = useHistory()
  const destiny = props.destiny
  const handleListClick = () => {
    history.push(destiny)
  }
  return (
    <Fab
      onClick={handleListClick}
      sx={{
        backgroundColor: 'blue',
        color: 'white',
        position: 'absolute',
        transform: 'translate(10px, -65px)'
      }}
    >
      <List></List>
    </Fab>
  )
}
