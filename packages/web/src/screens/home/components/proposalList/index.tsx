import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

export const ProposalList = () => {
  const columns = [
    { field: 'id', hide: true },
    { field: 'proposalName', heardName: 'Proposta', width: 200 },
    { field: 'availableValue', headerName: 'Valor Disponível', width: 170 }
  ]
  const rows = [
    { id: '1', proposalName: 'CONAB', availableValue: '25000' },
    { id: '2', proposalName: 'Ministerio', availableValue: '50000' }
  ]

  return (
    <>
      <div style={{ padding: 10, fontWeight: 'bold' }}>Propostas</div>
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
