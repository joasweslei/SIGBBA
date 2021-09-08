import { red } from '@material-ui/core/colors'
import React from 'react'
import { CustomTable } from '../../app/components/CustomTable'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { StyledTableCell } from '../../app/components/StyledTableCell'
import { StyledTableRow } from '../../app/components/StyledTableRow'

const PedidoDoDia = [
  {
    number: '01',
    aliment: 'Alimento 1',
    farmer: 'Agricultor A',
    quantity: '200 UN',
    date: '2021/09/07'
  },
  {
    number: '02',
    aliment: 'Alimento 2',
    farmer: 'Agricultor B',
    quantity: '200 UN',
    date: '2021/09/07'
  },
  {
    number: '03',
    aliment: 'Alimento 3',
    farmer: 'Agricultor C',
    quantity: '50 UN',
    date: '2021/09/07'
  },
  {
    number: '04',
    aliment: 'Alimento 4',
    farmer: 'Agricultor D',
    quantity: '100 UN',
    date: '2021/09/07'
  },
  {
    number: '05',
    aliment: 'Alimento 5',
    farmer: 'Agricultor E',
    quantity: '200 UN',
    date: '2021/09/07'
  },
  {
    number: '06',
    aliment: 'Alimento 6',
    farmer: 'Agricultor F',
    quantity: '200 UN',
    date: '2021/09/07'
  }
]

const home = () => {
  return (
    <DefaultContainer breadcrumbs={['Home']}>
      <CustomTable
        headerColumns={
          <>
            <StyledTableCell>Número </StyledTableCell>
            <StyledTableCell>Alimento </StyledTableCell>
            <StyledTableCell>Agricultor </StyledTableCell>
            <StyledTableCell>Quantidade </StyledTableCell>
            <StyledTableCell>Data </StyledTableCell>
          </>
        }
        itens={PedidoDoDia.map(refArray => (
          <StyledTableRow>
            <StyledTableCell>a</StyledTableCell>
            <StyledTableCell>{refArray.number} </StyledTableCell>
            <StyledTableCell>{refArray.aliment} </StyledTableCell>
            <StyledTableCell>{refArray.farmer}</StyledTableCell>
            <StyledTableCell>{refArray.quantity}</StyledTableCell>
            <StyledTableCell>{refArray.date} </StyledTableCell>
            <StyledTableCell>a</StyledTableCell>
          </StyledTableRow>
        ))}
        itemCount={0}
        rowsPerPage={0}
        currentPage={0}
        handleChangePage={() => {}}
      />
      <CustomTable
        headerColumns={
          <>
            <StyledTableCell>Entidade </StyledTableCell>
            <StyledTableCell>Quantidade de Alimentos </StyledTableCell>
            <StyledTableCell>Status </StyledTableCell>
            <StyledTableCell>Data de Saída </StyledTableCell>
          </>
        }
        itens={PedidoDoDia.map(refArray => (
          <StyledTableRow>
            <StyledTableCell>a</StyledTableCell>
            <StyledTableCell>{refArray.number} </StyledTableCell>
            <StyledTableCell>{refArray.aliment} </StyledTableCell>
            <StyledTableCell>{refArray.farmer}</StyledTableCell>
            <StyledTableCell>{refArray.quantity}</StyledTableCell>
            <StyledTableCell>{refArray.date} </StyledTableCell>
            <StyledTableCell>a</StyledTableCell>
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

export default home
