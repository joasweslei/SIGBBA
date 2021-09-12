import { Box, Button, TextareaAutosize, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FormContainer from '../../../app/components/DefaultSchemas/FormContainer'
import { DataGrid, GridRowsProp } from '@mui/x-data-grid'
import TitleDivider from '../../../app/components/CustomDivider'
import { useHistory } from 'react-router-dom'
import { AddCircleOutlined, Remove } from '@material-ui/icons'
import api from '../../../config/api'

export const AlimentBasketForm = () => {
  const history = useHistory()

  const [rows, setRows] = useState<GridRowsProp>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'name', headerName: 'Nome Alimento', width: 300 },
    { field: 'description', headerName: 'Descrição Alimento', width: 300 },
    { field: 'quantity', headerName: 'Quantidade', width: 200, editable: true },
    { field: 'unitType', headerName: 'Unidade', width: 200, editable: true }
  ]

  const handleBackwardButtonClick = () => {
    history.push('/aliment-basket')
  }

  const handleSave = async () => {
    const response = await api.post('/aliment-basket', {
      name,
      description
    })

    if (response.status === 200) {
      history.push('/aliment-basket')
    }
  }

  useEffect(() => {
    setRows([
      {
        id: '8e331141-d727-4f40-a00a-57a278ebdbbe',
        name: 'teste',
        description: 'teste'
      }
    ])
  }, [])

  return (
    <FormContainer
      breadcrumbs={['Cesta de alimentos', 'Nova Cesta']}
      onBackButtonClick={handleBackwardButtonClick}
      onSaveClick={handleSave}
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
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          id="outlined-basic"
          label="Nome cesta"
          variant="outlined"
        />
        <TextareaAutosize
          value={description}
          onChange={e => setDescription(e.target.value)}
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
        rowsPerPageOptions={[10, 20, 50, 100]}
        autoHeight
        checkboxSelection
      />
    </FormContainer>
  )
}
