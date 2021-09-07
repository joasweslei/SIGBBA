import React from 'react'
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/system'
import { AppBarSchema } from '../AppBar/AppBarSchema'

export interface DefaultContainerProps {
  children: React.ReactNode
  breadcrumbs: string[]
}

const DefaultContainer: React.FC<DefaultContainerProps> = ({
  children,
  breadcrumbs
}: DefaultContainerProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarSchema breadcrumbs={breadcrumbs} />
      <Container maxWidth="lg" sx={{ padding: '20px' }}>
        {children}
      </Container>
    </Box>
  )
}

export default DefaultContainer
