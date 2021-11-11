import { AppBar, Box, Button, Container, TextField, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import api from '../../../config/api'
import { StyledLogin } from './styles'

export const Login = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [userpassword, setUserpassword] = useState('')

  const handleClick = async () => {
    // TODO: tratar erros na api e aqui

    const response = await api.post(`/users/auth/username`, {
      username: username,
      userpassword: userpassword
    })

    if (response.status === 200) {
      const { data } = response
      if (data.access) {
        history.push('/user')
      } else {
        Swal.fire('Login', 'Erro na verificação dos dados', 'warning')
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
            <TextField
              id="outlined-basic"
              label="User"
              variant="outlined"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
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
              value={userpassword}
              onChange={e => setUserpassword(e.target.value)}
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
