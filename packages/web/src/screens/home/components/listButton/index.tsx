import { Fab } from '@material-ui/core'
import React from 'react'
import ListIcon from '@material-ui/icons/List'
import { useHistory } from 'react-router-dom'
import './App.css'

export function ListButton(props: any) {
  const history = useHistory()
  const destiny = props.destiny
  const handleListClick = () => {
    history.push(destiny)
  }
  const handleMouseOver = (e: any) => {
    e.target.style.color = 'black'
  }
  const handleMouseOut = (e: any) => {
    e.target.style.color = 'white'
  }
  return (
    <Fab
      onClick={handleListClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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
