import { Fab } from '@material-ui/core'
import React from 'react'
import ListIcon from '@material-ui/icons/List'
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
      <ListIcon></ListIcon>
    </Fab>
  )
}
