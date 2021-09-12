import React, { useEffect, useState } from 'react'
import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid'
import api from '../../../config/api'

export const AlimentBasketList = () => {
  const [rows, setRows] = useState<GridRowsProp>([])

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

  useEffect(() => {
    ;(async () => {
      const response = await api.get('/aliment-basket')
      if (response.status === 200) {
        const { data } = response
        console.log(data)
        setRows(data)
      }
    })()
  }, [])

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
