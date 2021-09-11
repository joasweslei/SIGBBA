import { Box, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'

const FormFamily = () => {
  return (
    <FormContainer breadcrumbs={['Familias', 'Cadastrar Familia']}>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 }, paddingTop: '2%' }}
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
          value="end"
          control={<Checkbox color="primary" />}
          label="Buscar Cesta"
          labelPlacement="end"
        />
      </Box>
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
          value="end"
          control={<Checkbox color="primary" />}
          label="Buscar Cesta"
          labelPlacement="end"
        />
      </Box>
    </FormContainer>
  )
}
export default FormFamily
