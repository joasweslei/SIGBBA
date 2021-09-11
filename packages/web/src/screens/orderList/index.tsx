import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Paper } from '@material-ui/core'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import TitleDivider from '../../app/components/CustomDivider'

export const OrderList = () => {
  const columns = [
    { field: 'id', headerName: 'Número', width: 150 },
    { field: 'farmer', headerName: 'Agricultor', width: 580 },
    { field: 'situation', headerName: 'Status', width: 130 },
    { field: 'date', headerName: 'Data de Entrega', width: 210, editable: true }
  ]

  const rows = [
    {
      id: '01',
      farmer: 'Agricultor A',
      situation: 'Aberto',
      date: '2021/09/07'
    },
    {
      id: '02',
      farmer: 'Agricultor B',
      situation: 'Aberto',
      date: '2021/09/07'
    },
    {
      id: '03',
      farmer: 'Agricultor C',
      situation: 'Fechado',
      date: '2021/09/07'
    },
    {
      id: '04',
      farmer: 'Agricultor D',
      situation: 'Cancelado',
      date: '2021/09/07'
    },
    {
      id: '05',
      farmer: 'Agricultor E',
      situation: 'Aberto',
      date: '2021/09/07'
    },
    {
      id: '06',
      farmer: 'Agricultor F',
      situation: 'Aberto',
      date: '2021/09/07'
    }
  ]
  return (
    <DefaultContainer breadcrumbs={['Pedidos']}>
      <Paper sx={{ padding: 1 }} elevation={3}>
        <TitleDivider title="Pedidos da Semana" />
        <DataGrid
          style={{ marginTop: 20 }}
          columns={columns}
          rows={rows}
          pageSize={5}
          rowsPerPageOptions={[2]}
          autoHeight
          checkboxSelection={true}
        />
      </Paper>
    </DefaultContainer>
  )
}
