import DefaultContainer from '../../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import {
  DataGrid,
  GridColumns,
  GridRowId,
  GridRowsProp,
  GridSelectionModel
} from '@mui/x-data-grid'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import api from '../../../../config/api'

export const EntityBeneficiaryList = () => {
  const history = useHistory()

  const [selectedGridRowsIds, setSelectedGridRowsIds] = useState<GridRowId[]>(
    []
  )
  const [rows, setRows] = useState<GridRowsProp>([])

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', type: 'integer', width: 90 },
    { field: 'Nome', headerName: 'Nome', type: 'string', width: 130 },
    {
      field: 'email',
      headerName: 'E-mail',
      type: 'string',
      flex: 1
    },
    {
      field: 'active',
      headerName: 'Ativo',
      type: 'string',
      width: 160,
      align: 'center'
    }
  ]

  useEffect(() => {
    ;(async () => {
      const response = await api.get('/entity-beneficiary')
      if (response.status === 200) {
        const { data } = response
        setRows(data)
      }
    })()
  }, [])

  const handleAddClick = () => {
    history.push('/entity/form')
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

    history.push(`/entity/form?id=${selectedGridRowsIds[0]}`)
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
        const response = await api.delete(`/entity/${id}`)
        const { data } = response
        setRows(rows.filter(e => e.id !== data.id))
      })

      Swal.fire(
        'Itens removidos com sucesso!',
        `Foram removidos ${selectedGridRowsIds.length} entidades com sucesso.`,
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

  const arrayItems = [
    { id: 1, Nome: '', email: '', ativo: 'ativo' },
    { id: 2, Nome: '', email: '', ativo: 'ativo' },
    { id: 3, Nome: '', email: '', ativo: 'ativo' },
    { id: 4, Nome: '', email: '', ativo: 'ativo' },
    { id: 5, Nome: '', email: '', ativo: 'ativo' },
    { id: 6, Nome: '', email: '', ativo: 'ativo' }
  ]

  return (
    <DefaultContainer
      breadcrumbs={['Entidade beneficiária']}
      onAddClick={handleAddClick}
      onEditClick={handleEditClick}
      onDeleteClick={handleDeleteClick}
    >
      <DataGrid
        columns={columns}
        rows={arrayItems}
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
