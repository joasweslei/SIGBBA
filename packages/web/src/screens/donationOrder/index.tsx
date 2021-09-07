import React from 'react'

import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { CustomTable } from '../../app/components/CustomTable'
import { StyledTableCell } from '../../app/components/StyledTableCell'
import { StyledTableRow } from '../../app/components/StyledTableRow'

const arrayItems = [
  {
    number: 1,
    farmer: 'Agricultor A',
    situation: 'Aberto',
    date: '2021/09/07'
  },
  {
    number: 2,
    farmer: 'Agricultor B',
    situation: 'Aberto',
    date: '2021/09/07'
  },
  {
    number: 3,
    farmer: 'Agricultor C',
    situation: 'Fechado',
    date: '2021/09/07'
  },
  {
    number: 4,
    farmer: 'Agricultor D',
    situation: 'Cancelado',
    date: '2021/09/07'
  },
  {
    number: 5,
    farmer: 'Agricultor E',
    situation: 'Aberto',
    date: '2021/09/07'
  },
  { number: 6, farmer: 'Agricultor F', situation: 'Aberto', date: '2021/09/07' }
]

const donationOder = () => {
  return (
    <DefaultContainer breadcrumbs={['Home']}>
      <CustomTable
        headerColumns={
          <>
            <StyledTableCell>NÚMERO</StyledTableCell>
            <StyledTableCell>AGRICULTOR</StyledTableCell>
            <StyledTableCell>SITUAÇÃO</StyledTableCell>
            <StyledTableCell>DATA ENTREGA</StyledTableCell>
          </>
        }
        itens={arrayItems.map(order => (
          <StyledTableRow>
            <StyledTableCell>{order.number}</StyledTableCell>
            <StyledTableCell>{order.farmer}</StyledTableCell>
            <StyledTableCell>{order.situation}</StyledTableCell>
            <StyledTableCell>{order.date}</StyledTableCell>
          </StyledTableRow>
        ))}
        itemCount={0}
        rowsPerPage={0}
        currentPage={0}
        handleChangePage={() => {}}
      />
    </DefaultContainer>
  )
}

export default donationOder
