import React, { useEffect, useState } from 'react'
import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid'
import api from '../../../config/api'
import { useHistory } from 'react-router-dom'

export const AlimentBasketList = () => {
  const history = useHistory()

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

  const handleAddClick = () => {
    history.push('/aliment-basket/form')
  }

  return (
    <DefaultContainer
      breadcrumbs={['Cesta de alimentos']}
      onAddClick={handleAddClick}
    >
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
