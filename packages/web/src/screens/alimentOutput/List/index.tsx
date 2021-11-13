import { DataGrid, GridColumns, GridRowId, GridRowsProp } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'

const AlimentOutputList: React.FC = () => {
  const history = useHistory()

  const [selectedGridRowsIds, setSelectedGridRowsIds] = useState<GridRowId[]>(
    []
  )
  const [rows, setRows] = useState<GridRowsProp>([])

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', type: 'string', flex: 1 },
    { field: 'entity', headerName: 'Entidade', type: 'string', flex: 1 },
    {
      field: 'dateOutput',
      headerName: 'Data de saída',
      type: 'string',
      flex: 1
    },
    { field: 'alimentCount', headerName: 'Qtd. Alimentos', type: 'number', flex: 1 },
  ]

  const handleAddAlimentPutput = () => {
    
  }

  return (
    <DefaultContainer
      breadcrumbs={["Saída de alimentos"]}
      onAddClick={handleAddAlimentPutput}
      onEditClick={() => {}}
      onDeleteClick={() => {}}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        rowsPerPageOptions={[10, 20, 50, 100]}
        paginationMode="server"
        pagination={true}
        onSelectionModelChange={() => {}}
        autoHeight
        checkboxSelection
      />
    </DefaultContainer>
  )
}

export { AlimentOutputList }
