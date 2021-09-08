import {
  AppBar,
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'
import React from 'react'
import { StyledLogin } from './styles'

export const Login = () => {
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
          flex: 1
        }}
      >
        <StyledLogin>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="User" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Senha" variant="outlined" />
          </Box>
          <Button variant="contained" color="primary">
              Salvar
            </Button>
        </StyledLogin>
      </Container>
    </Box>
  )
}
