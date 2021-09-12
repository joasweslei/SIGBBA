import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

export const DapValidation = () => {
  const columns = [
    { field: 'id', hide: true, headerName: 'id' },
    {
      field: 'farmer',
      headerName: 'Agricultor',
      width: 250
    },
    {
      field: 'dapDate',
      headerName: 'Data',
      type: 'date',
      editable: false
    }
  ]
  const rows = [
    { id: '1', farmer: 'Agricultor A', dapDate: '2021/09/07' },
    { id: '2', farmer: 'Agricultor B', dapDate: '2021/09/07' },
    { id: '3', farmer: 'Agricultor C', dapDate: '2021/09/25' },
    { id: '4', farmer: 'Agricultor D', dapDate: '2021/09/07' },
    { id: '5', farmer: 'Agricultor 3', dapDate: '2021/09/06' },
    { id: '6', farmer: 'Agricultor F', dapDate: '2021/09/07' },
    { id: '7', farmer: 'Agricultor G', dapDate: '2021/09/14' },
    { id: '8', farmer: 'Agricultor H', dapDate: '2021/09/07' },
    { id: '9', farmer: 'Agricultor I', dapDate: '2021/09/19' },
    { id: '10', farmer: 'Agricultor J', dapDate: '2021/09/17' }
  ]
  return (
    <>
      <div style={{ padding: 10, fontWeight: 'bold' }}>Vencimentos da Dap</div>
      <DataGrid
        columns={columns}
        rows={rows}
        autoHeight
        disableColumnMenu={true}
      />
    </>
  )
}
