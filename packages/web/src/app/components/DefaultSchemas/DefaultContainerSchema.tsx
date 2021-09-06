import { Container } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React from 'react'
import { AppBarSchema } from './AppBarSchema'

const DefaultContainer: React.FC = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarSchema />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

export default DefaultContainer
