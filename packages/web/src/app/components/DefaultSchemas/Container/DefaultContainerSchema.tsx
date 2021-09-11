import React from 'react'
import { Container, Fab, useTheme } from '@material-ui/core'
import { Box } from '@material-ui/system'
import { AppBarSchema } from '../AppBar/AppBarSchema'
import { Add, Delete, Edit, Remove, Save } from '@material-ui/icons'

export interface DefaultContainerProps {
  children: React.ReactNode
  breadcrumbs: string[]
}

const DefaultContainer: React.FC<DefaultContainerProps> = ({
  children,
  breadcrumbs
}: DefaultContainerProps) => {
  const theme = useTheme()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarSchema breadcrumbs={breadcrumbs} />
      <Container maxWidth="lg" sx={{ padding: '20px' }}>
        {children}
        <Box
          sx={{
            maxWidth: 1190,
            width: '100%',
            position: 'fixed',
            bottom: 20,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            transform: 'translate(-25px, 0)',
            '& > :not(style)': { mr: 2 }
          }}
        >
          <Fab
            sx={{
              backgroundColor: theme.palette.warning.main,
              color: theme.palette.warning.contrastText,
              '&:hover': { backgroundColor: theme.palette.warning.light }
            }}
          >
            <Delete />
          </Fab>
          <Fab color="secondary">
            <Edit />
          </Fab>
          <Fab color="primary" variant="extended">
            <Add />
            Novo
          </Fab>
        </Box>
      </Container>
    </Box>
  )
}

export default DefaultContainer
