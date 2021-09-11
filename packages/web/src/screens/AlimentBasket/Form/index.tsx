import {
  Box,
  Divider,
  TextareaAutosize,
  TextField,
  Typography
} from '@material-ui/core'
import React from 'react'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'
import { DataGrid } from '@mui/x-data-grid'
import CustomDivider from '../../../app/components/CustomDivider'

export const AlimentBasketForm = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'name', headerName: 'Nome Alimento', width: 300 },
    { field: 'description', headerName: 'Descrição Alimento', width: 300 },
    { field: 'quantity', headerName: 'Quantidade', width: 200, editable: true },
    { field: 'unitType', headerName: 'Unidade', width: 200, editable: true }
  ]

  const rows = [
    {
      id: '1',
      name: 'Pacote de arroz',
      description: 'Pacote de arroz branco de 2kg',
      quantity: 2,
      unitType: 'Kg'
    },
    {
      id: '2',
      name: 'Pacote de arroz',
      description: 'Pacote de arroz branco de 2kg',
      quantity: 2,
      unitType: 'Kg'
    },
    {
      id: '3',
      name: 'Pacote de arroz',
      description: 'Pacote de arroz branco de 2kg',
      quantity: 2,
      unitType: 'Kg'
    }
  ]

  return (
    <FormContainer breadcrumbs={['Cesta de alimentos', 'Nova Cesta']}>
      <CustomDivider title="Informações da " />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { width: '100ch', mb: 1 },
          paddingTop: '1ch'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Nome cesta" variant="outlined" />
        <TextareaAutosize
          id="outlined-basic"
          placeholder="Descrição"
          minRows={5}
          minLength={200}
        />
      </Box>
      <CustomDivider title="Alimentos" />
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={2}
        rowsPerPageOptions={[2]}
        autoHeight
        checkboxSelection={true}
      />
    </FormContainer>
  )
}
