import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Paper } from '@material-ui/core'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import OptionListPopover from './components/popover'

export const OrderList = () => {
  const columns = [
    { field: 'id', headerName: 'Número', width: 145 },
    { field: 'farmer', headerName: 'Agricultor', width: 518 },
    { field: 'situation', headerName: 'Status', width: 130 },
    {
      field: 'date',
      type: 'date',
      headerName: 'Data de Entrega',
      width: 200
    },
    {
      field: 'options',
      headerName: 'Opções',
      renderCell: () => (
        <div
          style={{
            width: '100%',
            textAlign: 'center'
          }}
        >
          {OptionListPopover()}
        </div>
      ),
      width: 140
    }
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
        <div style={{ fontWeight: 'bold' }}>Pedidos da Semana</div>
        <DataGrid
          style={{ marginTop: 20 }}
          columns={columns}
          rows={rows}
          pageSize={5}
          autoHeight
        />
      </Paper>
    </DefaultContainer>
  )
}
