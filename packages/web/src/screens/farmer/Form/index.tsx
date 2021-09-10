import { Box, TextField } from '@material-ui/core'
import React from 'react'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'

const FarmerForm = () => {
  return (
    <FormContainer breadcrumbs={['Agricultor', 'Cadastrar Agricultor']}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          paddingTop: '2%'
         }}
        noValidate
        autoComplete="off">
          <TextField sx={{width: '44ch'}} id="outlined-basic" label="Nome Responsável" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="CPF Responsável" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="Sexo" variant="outlined" />
          <TextField sx={{width: '44ch'}} id="outlined-basic" label="Nome da Mãe do Responsável" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="Data Nascimento Responsável" variant="outlined" />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          paddingTop: '2%'
         }}
        noValidate
        autoComplete="off">
          <TextField sx={{width: '44ch'}} id="outlined-basic" label="Nome Responsável" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="CPF Responsável" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="Sexo" variant="outlined" />
          <TextField sx={{width: '44ch'}} id="outlined-basic" label="Nome da Mãe do Responsável" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="Data Nascimento Responsável" variant="outlined" />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          paddingTop: '2%'
         }}
        noValidate
        autoComplete="off">
          <TextField sx={{width: '64ch'}} id="outlined-basic" label="Endereço Completo" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="Município" variant="outlined" />
          <TextField sx={{width: '10ch'}} id="outlined-basic" label="UF" variant="outlined" />
          <TextField sx={{width: '44ch'}} id="outlined-basic" label="Telefone" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="NIS" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="Validade do Alvará" variant="outlined" />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          paddingTop: '2%'
         }}
        noValidate
        autoComplete="off">
          <TextField sx={{width: '50ch'}} id="outlined-basic" label="DAPI" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="Validade DAPI" variant="outlined" />
          <TextField sx={{width: '24ch'}} id="outlined-basic" label="Alimento à ser comprado" variant="outlined" />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1},
          paddingTop: '2%'
         }}
        noValidate
        autoComplete="off">
          <TextField sx={{width: '50ch'}} id="outlined-basic" label="Cartão produtor" variant="outlined" />
          <TextField sx={{width: '30ch'}} id="outlined-basic" label="Senha Cartão Produtor" type="password" variant="outlined" />
      </Box>
    </FormContainer>
  )
}

export default FarmerForm