import React from 'react'
import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid'

export const AlimentBasketList = () => {
  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', type: 'integer', width: 90 },
    { field: 'name', headerName: 'Nome', type: 'string', width: 130 },
    {
      field: 'description',
      headerName: 'Descrição',
      type: 'string',
      flex: 1
    }
  ]

  const rows: GridRowsProp = [
    {
      id: 1,
      name: 'Cesta Básica',
      description: 'Uma descrição descritiva'
    },
    {
      id: 2,
      name: 'Cesta Teste',
      description: 'Uma descrição descritiva'
    },
    {
      id: 3,
      name: 'Cesta Alo',
      description: 'Uma descrição descritiva'
    }
  ]

  return (
    <DefaultContainer breadcrumbs={['Cesta de alimentos']}>
      <DataGrid
        columns={columns}
        rows={rows}
        rowsPerPageOptions={[10, 20, 50, 100]}
        paginationMode="server"
        pagination={true}
        autoHeight
        checkboxSelection
      />
    </DefaultContainer>
  )
}
