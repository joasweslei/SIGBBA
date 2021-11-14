import { Box, TextField } from '@mui/material'
import React from 'react'
import { CustomDropdown } from '../../../../app/components/CustomDropDown'
import FormContainer from '../../../../app/components/DefaultSchemas/FormContainer'

const EntityForm = () => {
  const escolhas = ['Masculino', 'Feminino', 'Outros']
  const alimentos = ['Abacate', 'Maça', 'Batata', 'Arroz']
  const dias_fun = ['', '', '']
  const faixa_etaria = ['18-25', '26-36', '37-60', '61-80', '80+']
  const num_refeicoes = ['1-3', '4-5', '5-7']
  const qtd_funcionario = ['10-19', '20-29', '30-50']

  const [chooseOptions3, setOptions3] = React.useState('')

  const handleChangeOption3 = (event: any) => {
    setOptions3(event.target.value)
  }

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
          label="Nome popular"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CNPJ"
          variant="outlined"
        />
        <TextField
          sx={{ width: '64ch' }}
          id="outlined-basic"
          label="Endereço Completo"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CPF do Responsável"
          variant="outlined"
        />
        </Box>

        { <CustomDropdown
          title="Descrição da refeição"
          opcoes={alimentos}
          size="30ch"
          onChanged={handleChangeOption3}
          value={chooseOptions3}
          labelId="label_refeicao_usu"
          idSelect="select_refeicao_usuario2"
        ></CustomDropdown> }
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Telefone do responsável"
          variant="outlined"
        />
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Razão social"
          variant="outlined"
        />
        { <CustomDropdown
          title="Dias de funcionamento"
          opcoes={dias_fun}
          size="30ch"
          onChanged={handleChangeOption3}
          value={chooseOptions3}
          labelId="label_diasfun_usu"
          idSelect="select_diasfun_usuario2"
        ></CustomDropdown> }

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          paddingTop: '2%'
        }}
        noValidate
        autoComplete="off"
      >
        { <CustomDropdown
          title="Descrição faixa etária"
          opcoes={faixa_etaria}
          size="30ch"
          onChanged={handleChangeOption3}
          value={chooseOptions3}
          labelId="label_faixaetario_usu"
          idSelect="select_faixaetario_usuario2"
        ></CustomDropdown> }

        { <CustomDropdown
          title="Número de refeições"
          opcoes={num_refeicoes}
          size="30ch"
          onChanged={handleChangeOption3}
          value={chooseOptions3}
          labelId="label_nrefeicoes_usu"
          idSelect="select_nrefeicoes_usuario2"
        ></CustomDropdown> }
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="E-mail reponsável"
          variant="outlined"
        />
        { <CustomDropdown
          title="Quantidade funcionário"
          opcoes={qtd_funcionario}
          size="30ch"
          onChanged={handleChangeOption3}
          value={chooseOptions3}
          labelId="label_qtdfuncionarios_usu"
          idSelect="select_qtdfuncionarios_usuario2"
        ></CustomDropdown> }
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
          label="Dados do conselho"
          variant="outlined"
        />
        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="Data última atualização do conselho"
          variant="outlined"
        />

      </Box>


    </FormContainer>
  )
}

export default EntityForm
