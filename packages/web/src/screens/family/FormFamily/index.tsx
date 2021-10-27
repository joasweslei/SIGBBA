import { Box, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'
import TitleDivider from '../../../app/components/CustomDivider'
import { CustomDropdown } from '../../../app/components/CustomDropDown'
import { useHistory } from 'react-router-dom'
const FormFamily = () => {
  const escolhas = ['Masculino', 'Feminino', 'Outros']
  const dependestes = ['6', '5', '4', '3', '2', '1']
  const moradores = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
  const cesta = ['Cesta de Legumes', 'Cesta Básica']
  const faixaetaria = ['(Acima 65)', '(18-64)', '(16-17)', '(7-15)', '(0-6)']
  const recebimento = ['(1 mes)', '(2 meses)', '(3 meses)']
  const data = ['(12/10/2021)', '(15/11/2020)', '(20/05/2022)']

  const history = useHistory()

  const handleBackwardButtonClick = () => {
    history.push('/family')
  }
  return (
    <FormContainer
      breadcrumbs={['Familias', 'Cadastrar Familia']}
      onBackButtonClick={handleBackwardButtonClick}
    >
      <TitleDivider title="Informações Responsável 1" />
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 } }}
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
        <FormControlLabel
          sx={{ paddingLeft: ' 6ch' }}
          value="end"
          control={<Checkbox color="primary" />}
          label="Buscar Cesta"
          labelPlacement="end"
        />

        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome da Mãe do Responsável"
          variant="outlined"
        />

        <TextField
          sx={{ width: '25ch' }}
          id="outlined-basic"
          label="NIS do Responsável"
          variant="outlined"
        />

        <TextField
          sx={{ width: '20ch' }}
          id="outlined-basic"
          label="Data de Nascimento Responsável"
          variant="outlined"
        />
        {/* <CustomDropdown
          title="Sexo Responsável"
          opcoes={escolhas}
          size="30ch"
        ></CustomDropdown> */}
      </Box>

      <TitleDivider title="Informações Responsável 2" />

      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome Responsável 2"
          variant="outlined"
        />

        <TextField
          sx={{ width: '30ch' }}
          id="outlined-basic"
          label="CPF Responsável 2"
          variant="outlined"
        />
        <FormControlLabel
          sx={{ paddingLeft: ' 6ch' }}
          value="end"
          control={<Checkbox color="primary" />}
          label="Buscar Cesta"
          labelPlacement="end"
        />

        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome da Mãe do Responsável 2"
          variant="outlined"
        />

        <TextField
          sx={{ width: '25ch' }}
          id="outlined-basic"
          label="NIS do Responsável 2"
          variant="outlined"
        />

        <TextField
          sx={{ width: '20ch' }}
          id="outlined-basic"
          label="Data de Nascimento Responsável 2"
          variant="outlined"
        />
        {/* <CustomDropdown
          title="Sexo Responsável 2"
          opcoes={escolhas}
          size="30ch"
        ></CustomDropdown> */}
      </Box>

      <TitleDivider title="Documentos Pessoais" />

      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Endereço"
          variant="outlined"
        />
        <TextField
          sx={{ width: '20ch' }}
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
        />

        {/* <CustomDropdown
          title="N° Dependentes"
          opcoes={dependestes}
          size="15ch"
        ></CustomDropdown> */}

        {/* <CustomDropdown
          title="Total Moradores"
          opcoes={moradores}
          size="15ch"
        ></CustomDropdown> */}

        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Entidade de Atendimento"
          variant="outlined"
        />

        {/* <CustomDropdown
          title="Faixa Etária"
          opcoes={faixaetaria}
          size="15ch"
        ></CustomDropdown> */}

        {/* <CustomDropdown
          title="Cesta"
          opcoes={cesta}
          size="20ch"
        ></CustomDropdown> */}

        <TextField
          sx={{ width: '15ch' }}
          id="outlined-basic"
          label="Número de Faltas"
          variant="outlined"
        />

        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Serviço Social"
          variant="outlined"
        />
        {/* <CustomDropdown
          title="Tempo de Recebimento"
          opcoes={recebimento}
          size="15ch"
        ></CustomDropdown> */}

        {/* <CustomDropdown
          title="Data Inicial"
          opcoes={data}
          size="15ch"
        ></CustomDropdown> */}

        {/* <CustomDropdown
          title="Data Final"
          opcoes={data}
          size="15ch"
        ></CustomDropdown> */}

        <TextField
          sx={{ width: '15ch' }}
          id="outlined-basic"
          label="Renda per capita"
          variant="outlined"
        />
      </Box>
      <TitleDivider title="Informação dos Dependentes" />
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: '44ch' }}
          id="outlined-basic"
          label="Nome Dependente"
          variant="outlined"
        />
        <TextField
          sx={{ width: '20ch' }}
          id="outlined-basic"
          label="Data de Nascimento "
          variant="outlined"
        />
      </Box>
    </FormContainer>
  )
}
export default FormFamily
