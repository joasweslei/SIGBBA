import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import {
  DataGrid,
  GridColumns,
  GridRowId,
  GridRowsProp,
  GridSelectionModel
} from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../../config/api'
import Swal from 'sweetalert2'

const FamilyList: React.FC = () => {
  const history = useHistory()

  const [selectedGridRowsIds, setSelectedGridRowsIds] = useState<GridRowId[]>(
    []
  )

  const [rows, setRows] = useState<GridRowsProp>([])

  useEffect(() => {
    ;(async () => {
      const response = await api.get('/family')
      if (response.status === 200) {
        const { data } = response
        setRows(data)
      }
    })()
  }, [])

  const handleAddClick = () => {
    history.push('/family/form')
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
    history.push(`/family/form?id=${selectedGridRowsIds[0]}`)
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
        const response = await api.delete(`/family/${id}`)
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
  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', type: 'integer', width: 90 },
    {
      field: 'nomeresponsavel',
      headerName: 'Responsável',
      type: 'string',
      width: 200
    },
    {
      field: 'cpfresponsavel',
      headerName: 'CPF do Responsável',
      type: 'string',
      flex: 1
    },
    {
      field: 'totaldependentes',
      headerName: 'Total Dependentes',
      type: 'string',
      width: 220,
      align: 'center'
    }
  ]

  const linhas: GridRowsProp = [
    {
      id: 1,
      nomeresponsavel: 'Responsável',
      cpfresponsavel: '111.222.222-85',
      totaldependentes: '4'
    },
    {
      id: 2,
      nomeresponsavel: 'Responsável',
      cpfresponsavel: '121.422.282-85',
      totaldependentes: '3'
    },
    {
      id: 3,
      nomeresponsavel: 'Responsável',
      cpfresponsavel: '181.722.282-67',
      totaldependentes: '6'
    }
  ]

  return (
    <DefaultContainer
      breadcrumbs={['Familias']}
      onAddClick={handleAddClick}
      onEditClick={handleEditClick}
      onDeleteClick={handleDeleteClick}
    >
      <DataGrid
        columns={columns}
        rows={linhas}
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
export default FamilyList
