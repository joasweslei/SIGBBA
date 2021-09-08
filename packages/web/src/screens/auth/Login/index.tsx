import {
  AppBar,
  Box,
  Container,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core'
import React from 'react'

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
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
        </Box>
      </Container>
    </Box>
  )
}
