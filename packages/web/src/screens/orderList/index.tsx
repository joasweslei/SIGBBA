import React from 'react'

import { IconButton } from '@material-ui/core'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { CustomTable } from '../../app/components/CustomTable'
import { StyledTableCell } from '../../app/components/StyledTableCell'
import { StyledTableRow } from '../../app/components/StyledTableRow'

import { DeleteForever, Create } from '@material-ui/icons'

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
    <DefaultContainer breadcrumbs={['Pedidos']}>
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
            <StyledTableCell style={{ textAlign: 'center' }}>
              <IconButton disabled={order.situation === 'Cancelado'}>
                <Create fontSize="small"></Create>
              </IconButton>
            </StyledTableCell>
            <StyledTableCell style={{ textAlign: 'center' }}>
              {order.number}
            </StyledTableCell>
            <StyledTableCell
              style={{
                minWidth: '45vw'
              }}
            >
              {order.farmer}
            </StyledTableCell>
            <StyledTableCell style={{ textAlign: 'center' }}>
              {order.situation}
            </StyledTableCell>
            <StyledTableCell style={{ textAlign: 'center' }}>
              {order.date}
            </StyledTableCell>
            <StyledTableCell style={{ textAlign: 'center' }}>
              <IconButton disabled={order.situation === 'Cancelado'}>
                <DeleteForever fontSize="medium"></DeleteForever>
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
