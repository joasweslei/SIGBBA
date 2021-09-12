import React, { useEffect, useState } from 'react'
import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import {
  DataGrid,
  GridColumns,
  GridRowId,
  GridRowsProp,
  GridSelectionModel
} from '@mui/x-data-grid'
import Swal from 'sweetalert2'
import api from '../../../config/api'
import { useHistory } from 'react-router-dom'

export const AlimentBasketList = () => {
  const history = useHistory()

  const [selectedGridRowsIds, setSelectedGridRowsIds] = useState<GridRowId[]>(
    []
  )
  const [rows, setRows] = useState<GridRowsProp>([])

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', type: 'string', flex: 1 },
    { field: 'name', headerName: 'Nome', type: 'string', flex: 1 },
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
        setRows(data)
      }
    })()
  }, [])

  const handleAddClick = () => {
    history.push('/aliment-basket/form')
  }

  const handleEditClick = () => {}

  const handleDeleteClick = async () => {
    console.log(selectedGridRowsIds)
    if (!selectedGridRowsIds || selectedGridRowsIds.length < 1) {
      Swal.fire(
        'Oops...',
        'Você precisa selecionar pelo menos 1 item para remover',
        'error'
      )
    }

    const result = await Swal.fire({
      title: 'Tem certeza que deseja remover esses itens?',
      text: `Essa ação não pode ser revertida! Serão removidos ${selectedGridRowsIds.length} cestas de alimentos`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: `Sim, remover itens selecionados`,
      cancelButtonText: 'Cancelar'
    })

    if (result.isConfirmed) {
      selectedGridRowsIds.forEach(async id => {
        const response = await api.delete(`/aliment-basket/${id}`)
        const { data } = response
        setRows(rows.filter(e => e.id !== data.id))
      })

      Swal.fire(
        'Itens removidos com sucesso!',
        `Foram removidos ${selectedGridRowsIds.length} cestas de alimentos com sucesso.`,
        'success'
      )
    }
  }

  const handleSelectionModelChange = (
    selectionModel: GridSelectionModel,
    _?: any
  ) => {
    const selectedIds = selectionModel.map(ids => ids)
    setSelectedGridRowsIds(selectedIds)
  }

  return (
    <DefaultContainer
      breadcrumbs={['Cesta de alimentos']}
      onAddClick={handleAddClick}
      onEditClick={handleEditClick}
      onDeleteClick={handleDeleteClick}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        rowsPerPageOptions={[10, 20, 50, 100]}
        paginationMode="server"
        pagination={true}
        onSelectionModelChange={handleSelectionModelChange}
        autoHeight
        checkboxSelection
      />
    </DefaultContainer>
  )
}
