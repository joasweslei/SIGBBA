import React from 'react'
import { Box, Container, Fab, useTheme } from '@mui/material'

import { AppBarSchema } from '../AppBar/AppBarSchema'
import { Add, Delete, Edit } from '@mui/icons-material'


export interface DefaultContainerProps {
  children: React.ReactNode
  breadcrumbs: string[]
  onAddClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  onEditClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  onDeleteClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const DefaultContainer: React.FC<DefaultContainerProps> = ({
  children,
  breadcrumbs,
  onAddClick,
  onEditClick,
  onDeleteClick
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
          {onDeleteClick ? (
            <Fab
              onClick={onDeleteClick}
              sx={{
                backgroundColor: theme.palette.warning.main,
                color: theme.palette.warning.contrastText,
                '&:hover': { backgroundColor: theme.palette.warning.light }
              }}
            >
              <Delete />
            </Fab>
          ) : (
            <></>
          )}
          {onEditClick ? (
            <Fab color="secondary" onClick={onEditClick}>
              <Edit />
            </Fab>
          ) : (
            <></>
          )}
          {onAddClick ? (
            <Fab color="primary" variant="extended" onClick={onAddClick}>
              <Add />
              Novo
            </Fab>
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default DefaultContainer
