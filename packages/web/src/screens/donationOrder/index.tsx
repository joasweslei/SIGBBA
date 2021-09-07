import React from 'react'

import { IconButton } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { CustomTable } from '../../app/components/CustomTable'
import { StyledTableCell } from '../../app/components/StyledTableCell'
import { StyledTableRow } from '../../app/components/StyledTableRow'
import InputIcon from '@material-ui/icons/Input'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const arrayItems = [
  {
    number: '01',
    farmer: 'Agricultor A',
    situation: 'Aberto',
    date: '2021/09/07'
  },
  {
    number: '02',
    farmer: 'Agricultor B',
    situation: 'Aberto',
    date: '2021/09/07'
  },
  {
    number: '03',
    farmer: 'Agricultor C',
    situation: 'Fechado',
    date: '2021/09/07'
  },
  {
    number: '04',
    farmer: 'Agricultor D',
    situation: 'Cancelado',
    date: '2021/09/07'
  },
  {
    number: '05',
    farmer: 'Agricultor E',
    situation: 'Aberto',
    date: '2021/09/07'
  },
  {
    number: '06',
    farmer: 'Agricultor F',
    situation: 'Aberto',
    date: '2021/09/07'
  }
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
            <StyledTableCell style={{ backgroundColor: 'red' }}>
              <IconButton disabled={order.situation === 'Cancelado'}>
                <CreateIcon fontSize="small"></CreateIcon>
              </IconButton>
            </StyledTableCell>
            <StyledTableCell>{order.number}</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'red' }}>
              {order.farmer}
            </StyledTableCell>
            <StyledTableCell>{order.situation}</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'red' }}>
              {order.date}
            </StyledTableCell>
            <StyledTableCell>
              <IconButton>
                <InputIcon />
              </IconButton>
              <IconButton disabled={order.situation === 'Cancelado'}>
                <DeleteForeverIcon fontSize="small"></DeleteForeverIcon>
              </IconButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
        itemCount={arrayItems.length}
        rowsPerPage={5}
        currentPage={1}
        handleChangePage={() => {}}
      />
    </DefaultContainer>
  )
}

export default donationOder
