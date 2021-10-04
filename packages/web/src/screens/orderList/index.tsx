import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import OptionListPopover from './components/popover'

import {
  DataGrid,
  GridColumns,
  GridRowId,
  GridRowsProp,
  GridSelectionModel
} from '@mui/x-data-grid'
import api from '../../config/api'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

export const OrderList = () => {
  const history = useHistory()

  const [selectedGridRowsIds, setSelectedGridRowsIds] = useState<GridRowId[]>(
    []
  )
  const [rows, setRows] = useState<GridRowsProp>([])

  const columns: GridColumns = [
    { field: 'id', headerName: 'Código', width: 145 },
    { field: 'idFarmerId', headerName: 'Agricultor', width: 518 },
    { field: 'orderStatus', headerName: 'Status', width: 130 },
    {
      field: 'scheduledDate',
      type: 'date',
      headerName: 'Data de Entrega',
      width: 200
    } /*,
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
    }*/
  ]

  useEffect(() => {
    ;(async () => {
      const response = await api.get('/pedidosi')
      if (response.status === 200) {
        const { data } = response
        setRows(data)
        console.log('response')
      } else {
        console.log(response)
      }
    })()
  }, [])

  // const rows = [
  //   {
  //     id: '01',
  //     farmer: 'Agricultor A',
  //     situation: 'Aberto',
  //     date: '2021/09/07'
  //   },
  //   {
  //     id: '02',
  //     farmer: 'Agricultor B',
  //     situation: 'Aberto',
  //     date: '2021/09/07'
  //   },
  //   {
  //     id: '03',
  //     farmer: 'Agricultor C',
  //     situation: 'Fechado',
  //     date: '2021/09/07'
  //   },
  //   {
  //     id: '04',
  //     farmer: 'Agricultor D',
  //     situation: 'Cancelado',
  //     date: '2021/09/07'
  //   },
  //   {
  //     id: '05',
  //     farmer: 'Agricultor E',
  //     situation: 'Aberto',
  //     date: '2021/09/07'
  //   },
  //   {
  //     id: '06',
  //     farmer: 'Agricultor F',
  //     situation: 'Aberto',
  //     date: '2021/09/07'
  //   }
  // ]
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
