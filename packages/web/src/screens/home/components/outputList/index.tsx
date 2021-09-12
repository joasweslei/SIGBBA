import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

export const OutputList = () => {
  const columns = [
    { field: 'id', hide: true },
    { field: 'entity', headerName: 'Entidade', width: 200 },
    {
      field: 'quantityAlimets',
      headerName: 'Quantidade de alimentos',
      width: 270
    },
    { field: 'status', headerName: 'Status', width: 130 },
    {
      field: 'dateOutput',
      headerName: 'Data de Saída',
      type: 'date',
      editable: false,
      width: 130
    }
  ]

  const rows = [
    {
      id: '1',
      entity: 'Entidade A',
      quantityAlimets: '100',
      status: 'Aberto',
      dateOutput: '2021/09/12'
    },
    {
      id: '2',
      entity: 'Entidade B',
      quantityAlimets: '200',
      status: 'Fechado',
      dateOutput: '2021/09/12'
    },
    {
      id: '3',
      entity: 'Entidade C',
      quantityAlimets: '50',
      status: 'Cancelado',
      dateOutput: '2021/09/12'
    },
    {
      id: '4',
      entity: 'Entidade D',
      quantityAlimetss: '160',
      status: 'Aberto',
      dateOutput: '2021/09/12'
    },
    {
      id: '5',
      entity: 'Entidade E',
      quantityAlimets: '100',
      status: 'Cancelado',
      dateOutput: '2021/09/12'
    },
    {
      id: '6',
      entity: 'Entidade F',
      quantityAlimets: '100',
      status: 'Aberto',
      dateOutput: '2021/09/12'
    }
  ]

  return (
    <>
      <div style={{ padding: 10, fontWeight: 'bold' }}>
        Pedidos de entrada do dia
      </div>
      <DataGrid
        columns={columns}
        rows={rows}
        autoHeight
        disableColumnMenu={true}
        pageSize={3}
      />
    </>
  )
}
