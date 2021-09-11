import { Box, Button, TextareaAutosize, TextField } from '@material-ui/core'
import React from 'react'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'
import { DataGrid } from '@mui/x-data-grid'
import TitleDivider from '../../../app/components/CustomDivider'
import { useHistory } from 'react-router-dom'
import { AddCircleOutlined, Remove } from '@material-ui/icons'

export const AlimentBasketForm = () => {
  const history = useHistory()

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

  const handleBackwardButtonClick: React.MouseEventHandler<HTMLDivElement> =
    e => {
      history.push('/aliment-basket')
    }

  return (
    <FormContainer
      breadcrumbs={['Cesta de alimentos', 'Nova Cesta']}
      onBackButtonClick={handleBackwardButtonClick}
    >
      <TitleDivider title="Informações da cesta" />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { width: '100%', mb: 1 },
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
      <TitleDivider title="Alimentos" />
      <Box sx={{ '& > :not(style)': { ml: 1 }, mt: 1, mb: 2 }}>
        <Button variant="contained" color="primary">
          <AddCircleOutlined sx={{ mr: 1 }} />
          Adicionar
        </Button>
        <Button variant="outlined" color="primary">
          <Remove sx={{ mr: 1 }} />
          Remover
        </Button>
      </Box>
      <DataGrid
        columns={columns}
        rows={rows}
        rowCount={20}
        rowsPerPageOptions={[10, 20, 50, 100]}
        autoHeight
        checkboxSelection
      />
    </FormContainer>
  )
}
