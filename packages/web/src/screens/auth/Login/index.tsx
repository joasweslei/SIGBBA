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
import { useHistory } from 'react-router-dom'
import api from '../../../config/api'
import { StyledLogin } from './styles'

export const Login = () => {
  const history = useHistory()

  const handleClick = async () => {
    // TODO: tratar erros na api e aqui

    const response = await api.post(`/users/auth/username`, {
      username: 'robert',
      userpassword: '1234'
    })

    if (response.status === 200) {
      const { data } = response
      if (data.access) {
        history.push('/user')
      } else {
        console.log('Usuario ou senha inválidos')
      }
    }
  }

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
            <TextField
              id="outlined-basic"
              label="Senha"
              type="password"
              variant="outlined"
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Salvar
          </Button>
        </StyledLogin>
      </Container>
    </Box>
  )
}
