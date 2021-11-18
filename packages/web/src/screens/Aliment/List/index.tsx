import { DataGrid, GridColumns, GridRowId, GridRowsProp, GridSelectionModel } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'
import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import api from '../../../config/api'

export const AlimentList: React.FC = () => {
  const history = useHistory()

  const [selectedGridRowsIds, setSelectedGridRowsIds] = useState<GridRowId[]>(
    []
  )
  const [rows, setRows] = useState<GridRowsProp>([])

  useEffect(() => {
    ;(async () => {
      const response = await api.get('/aliment')
      if (response.status === 200) {
        const { data } = response
        setRows(data)
      }
    })()
  }, [])

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', type: 'string', flex: 1 },
    { field: 'name', headerName: 'Nome', type: 'string', flex: 1 },
    { field: 'description', headerName: 'Descrição', type: 'string', flex: 1 },
    { field: 'perishable', headerName: 'Perecível', type: 'boolean', flex: 1 },
    {
      field: 'storagePlace',
      headerName: 'Local de armazenamento',
      type: 'string',
      flex: 1
    },
    { field: 'typeFood', headerName: 'Classificação', type: 'number', flex: 1 },
  ]

  const handleAddAlimentOutput = () => {
    history.push('/aliment/form')
  }

  const handleEditClick = () => {
    if (!selectedGridRowsIds || selectedGridRowsIds.length < 1) {
      return Swal.fire(
        'Oops...',
        'Você precisa selecionar 1 item para editá-lo',
        'error'
      )
    } else if (selectedGridRowsIds.length > 1) {
      return Swal.fire(
        'Oops...',
        'Somente é possivel editar 1 item por vez',
        'error'
      )
    }

    history.push(`/aliment/form?id=${selectedGridRowsIds[0]}`)
  }

  const handleDeleteClick = async () => {
    if (!selectedGridRowsIds || selectedGridRowsIds.length < 1) {
      return Swal.fire(
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
          const response = await api.delete(`/aliment/${id}`)
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
      breadcrumbs={["Alimentos"]}
      onAddClick={handleAddAlimentOutput}
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
