import React from 'react'
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography
} from '@material-ui/core'
import { Box } from '@material-ui/system'

import { ArrowForwardRounded } from '@material-ui/icons'
import { BackwardButton } from '../../BackwardButton/index'

export interface FormContainerProps {
  children: React.ReactNode
  breadcrumbs: string[]
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  breadcrumbs
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
      <Container
        sx={{
          flex: 1,
          height: 83,
          boxShadow: '3px 0px 16px -3px rgba(0,0,0,0.32)',
          marginTop: 5
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            height: '100%',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              '@media(max-width: 630px)': {
                marginRight: 'auto'
              }
            }}
          >
            <BackwardButton />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              '@media(max-width: 630px)': {
                display: 'none'
              }
            }}
          >
            <Typography
              variant="body1"
              noWrap
              component="div"
              color="#7c7c7c"
              sx={{ textAlign: 'center', marginLeft: 2 }}
            >
              SIGBBA
            </Typography>
            {breadcrumbs.map(breadcrumb => (
              <>
                <ArrowForwardRounded
                  key={breadcrumb}
                  sx={{
                    height: '22px',
                    width: '22px',
                    color: '#7c7c7c',
                    margin: '0 10px'
                  }}
                />
                <Typography
                  key={breadcrumb}
                  variant="body1"
                  noWrap
                  component="div"
                  color="#7c7c7c"
                  sx={{ textAlign: 'center' }}
                >
                  {breadcrumb}
                </Typography>
              </>
            ))}
          </Box>
          <Box>
            <Button variant="contained" color="primary">
              Salvar
            </Button>
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          flexGrow: 1,
          minHeight: 700,
          boxShadow: '3px 0px 16px -3px rgba(0,0,0,0.32)',
          marginTop: 5
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default FormContainer
