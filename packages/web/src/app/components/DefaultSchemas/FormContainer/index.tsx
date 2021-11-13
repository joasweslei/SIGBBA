import React from 'react'
import { AppBar, Box, Container, Fab, Toolbar, Typography } from '@mui/material'


import HeaderForm from '../../HeaderForm'
import { ArrowBackRounded, ArrowForwardRounded, Save } from '@mui/icons-material'

export interface FormContainerProps {
  children: React.ReactNode
  breadcrumbs: string[]
  pageMode?: 'Inserção' | 'Edição' | undefined
  onBackButtonClick?: React.MouseEventHandler<HTMLDivElement> | undefined
  onSaveClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
  onNextClick?: () => void
  onBackClick?: () => void
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  breadcrumbs,
  pageMode,
  onBackButtonClick,
  onSaveClick,
  onNextClick,
  onBackClick
}: FormContainerProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flex: 1, display: 'inline-block' }}
          >
            Banco de Alimentos
          </Typography>
        </Toolbar>
      </AppBar>
      <HeaderForm
        breadcrumbs={breadcrumbs}
        onBackButtonClick={onBackButtonClick}
        pageMode={pageMode}
      />
      <Container
        sx={{
          flexGrow: 1,
          minHeight: 700,
          boxShadow: '3px 0px 16px -3px rgba(0,0,0,0.32)',
          mt: 5,
          mb: 5
        }}
      >
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
          {onBackClick ? (
            <Fab color="primary" onClick={() => onBackClick()} href="">
              <ArrowBackRounded />
            </Fab>
          ) : <></>}
          {onSaveClick ? (
            <Fab color="primary" onClick={onSaveClick} href="">
              <Save />
            </Fab>
          ) : <></>}
          {onNextClick ? (
            <Fab color="primary" onClick={() => onNextClick()} href="">
              <ArrowForwardRounded />
            </Fab>
          ) : <></>}
        </Box>
      </Container>
    </Box>
  )
}

export default FormContainer
