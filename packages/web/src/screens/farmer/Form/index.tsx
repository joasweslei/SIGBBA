import { Box, TextField } from '@material-ui/core'
import React from 'react'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const FarmerForm = () => {

  const [state, setState] = React.useState({
    age: '',
    name: 'hai'
  })

  const handleChange = (event: any) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value
    })
  }

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

        <FormControl variant="outlined" sx={{width: '24ch'}}>
          <InputLabel htmlFor="outlined-age-native-simple">Alimento à ser comprado</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            label="Alimentoàsercomprado"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple'
            }}>
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
      </FormControl>
      </Box>
    </FormContainer>
  )
}

export default FarmerForm