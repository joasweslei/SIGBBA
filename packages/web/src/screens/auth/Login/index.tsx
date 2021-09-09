import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'
import { VisibilityOff } from '@material-ui/icons'
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
            {/* margin: '0 auto' */}
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
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <VisibilityOff />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<Icon>send</Icon>}
          >
            Salvar
          </Button>
        </StyledLogin>
      </Container>
    </Box>
  )
}
