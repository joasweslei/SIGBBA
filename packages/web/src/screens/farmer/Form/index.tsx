import { Box, TextField } from '@material-ui/core'
import React from 'react'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'

const FarmerForm = () => {
  return (
    <FormContainer breadcrumbs={['Agricultor', 'Cadastrar Agricultor']}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          flex: 1,
          display: 'flex',
          maxWidth: '60%',
          paddingTop: '2%'
         }}
        noValidate
        autoComplete="off">
          <TextField id="outlined-basic" label="Nome Agricultor" variant="outlined" />
          <TextField id="outlined-basic" label="Nome Mãe" variant="outlined" />
          <TextField id="outlined-basic" label="Nome Mãe" variant="outlined" />
      </Box>
    </FormContainer>
  )
}

export default FarmerForm