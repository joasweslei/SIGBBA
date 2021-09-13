import {
  DataGrid,
  GridColumns,
  GridRowId,
  GridRowsProp,
  GridSelectionModel
} from '@mui/x-data-grid'
import DefaultContainer from '../../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'

export const User = () => {
  const history = useHistory()

  const [selectedGridRowsIds, setSelectedGridRowsIds] = useState<GridRowId[]>(
    []
  )
  const [rows, setRows] = useState<GridRowsProp>([])

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', type: 'integer', width: 90 },
    { field: 'login', headerName: 'Login', type: 'string', width: 130 },
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

  const linhas: GridRowsProp = [
    {
      id: 1,
      login: 'Usuario 1',
      email: 'usuario1@gmail.com',
      active: 'ativo'
    },
    {
      id: 2,
      login: 'Usuario 2',
      email: 'usuario2@gmail.com',
      active: 'desativado'
    },
    {
      id: 3,
      login: 'Usuario 3',
      email: 'usuario3@gmail.com',
      active: 'ativo'
    }
  ]

  const handleAddClick = () => {
    history.push('/user/form')
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

    history.push(`/user/form?id=${selectedGridRowsIds[0]}`)
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
      // selectedGridRowsIds.forEach(async id => {
      //   const response = await api.delete(`/aliment-basket/${id}`)
      //   const { data } = response
      //   setRows(rows.filter(e => e.id !== data.id))
      // })

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
      breadcrumbs={['Usuários']}
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
