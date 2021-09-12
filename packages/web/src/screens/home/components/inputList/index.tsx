import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

export const InputList = () => {
  const columns = [
    { field: 'id', headerName: 'Numero', width: 130 },
    { field: 'aliment', headerName: 'Alimento', width: 180 },
    {
      field: 'farmer',
      headerName: 'Agricultor',
      width: 180
    },
    {
      field: 'quantity',
      headerName: 'Quantidade',
      width: 150
    },
    {
      field: 'inputDate',
      headerName: 'Data',
      type: 'date',
      editable: false,
      width: 120
    }
  ]
  const rows = [
    {
      id: '1',
      aliment: 'Alimento 1',
      farmer: 'Agricultor A',
      quantity: '100UN',
      inputDate: '2021/09/07'
    },
    {
      id: '2',
      aliment: 'Alimento 2',
      farmer: 'Agricultor B',
      quantity: '200UN',
      inputDate: '2021/09/07'
    },
    {
      id: '3',
      aliment: 'Alimento 3',
      farmer: 'Agricultor C',
      quantity: '5 KG',
      inputDate: '2021/09/25'
    },
    {
      id: '4',
      aliment: 'Alimento 4',
      farmer: 'Agricultor D',
      quantity: '150UN',
      inputDate: '2021/09/07'
    },
    {
      id: '5',
      aliment: 'Alimento 5',
      farmer: 'Agricultor E',
      quantity: '20 KG',
      inputDate: '2021/09/06'
    },
    {
      id: '6',
      aliment: 'Alimento 6',
      farmer: 'Agricultor F',
      quantity: '300UN',
      inputDate: '2021/09/07'
    },
    {
      id: '7',
      aliment: 'Alimento 7',
      farmer: 'Agricultor G',
      quantity: '15KGUN',
      inputDate: '2021/09/14'
    },
    {
      id: '8',
      aliment: 'Alimento 8',
      farmer: 'Agricultor H',
      quantity: '100UN',
      inputDate: '2021/09/07'
    },
    {
      id: '9',
      aliment: 'Alimento 9',
      farmer: 'Agricultor I',
      quantity: '150UN',
      inputDate: '2021/09/19'
    },
    {
      id: '10',
      aliment: 'Alimento 10',
      farmer: 'Agricultor J',
      quantity: '18KG',
      inputDate: '2021/09/17'
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
