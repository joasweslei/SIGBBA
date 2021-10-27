import { Box, TextField } from '@material-ui/core'
import React from 'react'
import { CustomDropdown } from '../../../../app/components/CustomDropDown'
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer'

const EntityTransferForm = () => {
  const escolhas = ['Masculino', 'Feminino', 'Outros']
  const alimentos = ['Abacate', 'Maça', 'Batata', 'Arroz']

  return (
    <FormContainer breadcrumbs={['Agricultor', 'Cadastrar Agricultor']}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome Responsável"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CPF Responsável"
          variant="outlined"
        />
        <CustomDropdown
          title="Como você se identifica"
          opcoes={escolhas}
          size="30ch"
        ></CustomDropdown>
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome da Mãe do Responsável"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Data Nascimento Responsável"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome Responsável"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CPF Responsável"
          variant="outlined"
        />
        <CustomDropdown
          title="Como você se identifica"
          opcoes={escolhas}
          size="30ch"
        ></CustomDropdown>
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome da Mãe do Responsável"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Data Nascimento Responsável"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '64ch' }}
          id="outlined-basic"
          label="Endereço Completo"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Município"
          variant="outlined"
        />
        <TextField
          sx={{ width: '10ch' }}
          id="outlined-basic"
          label="UF"
          variant="outlined"
        />
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="NIS"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Validade do Alvará"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '50ch' }}
          id="outlined-basic"
          label="DAPI"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Validade DAPI"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '50ch' }}
          id="outlined-basic"
          label="Cartão produtor"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Senha Cartão Produtor"
          type="password"
          variant="outlined"
        />
        <CustomDropdown
          title="Alimento à ser comprado"
          opcoes={alimentos}
          size="24ch"
        ></CustomDropdown>
      </Box>
    </FormContainer>
  )
}

export default EntityTransferForm
