import { AppBar, Box, Button, Container, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { TextFieldPassword } from '../../../app/components/TextFieldClean/textFieldPassword/text_field_password'
import api from '../../../config/api'
import { StyledLogin } from './styles'
interface State {
  userpassword: string;
  showPassword: boolean;
}


export const Login = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')

  const [values, setValues] = React.useState<State>({
    userpassword: '',
    showPassword: false,

  });

  const onChanged = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    setValues({ ...values, [values.userpassword]: values.userpassword })
  }, [values.userpassword]);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClick = async () => {
    // TODO: tratar erros na api e aqui

    const response = await api.post('/users/auth/username', {
      username: username,
      userpassword: values.userpassword
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
              id="userfield"
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
            {/* <TextField
              id="outlined-basic"
              label="Senha"
              type="password"
              variant="outlined"
              value={userpassword}
              onChange={e => setUserpassword(e.target.value)}
            /> */}
            <TextFieldPassword
              label="Senha"
              tooltip="Clique para mostrar a senha"
              size='25'
              id='tfSenha'
              value={values.userpassword}
              showValue={values.showPassword}
              onChanged={onChanged('userpassword')}
              onClick={handleClickShowPassword}
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
