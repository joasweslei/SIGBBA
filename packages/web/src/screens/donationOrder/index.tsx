import React from 'react'

import { IconButton, Container } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { CustomTable } from '../../app/components/CustomTable'
import { StyledTableCell } from '../../app/components/StyledTableCell'
import { StyledTableRow } from '../../app/components/StyledTableRow'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
import DescriptionIcon from '@material-ui/icons/Description'
import FilterListIcon from '@material-ui/icons/FilterList'
import InputIcon from '@material-ui/icons/Input'

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
      <Container sx={{ marginTop: 10 }}>
        <CustomTable
          headerColumns={
            <>
              <StyledTableCell>
                <IconButton>
                  <AddCircleRoundedIcon
                    className="fa fa-plus-circle"
                    style={{ fontSize: 30, color: 'white' }}
                  ></AddCircleRoundedIcon>
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>NÚMERO</StyledTableCell>
              <StyledTableCell>AGRICULTOR</StyledTableCell>
              <StyledTableCell>SITUAÇÃO</StyledTableCell>
              <StyledTableCell>DATA ENTREGA</StyledTableCell>
              <StyledTableCell>
                <IconButton>
                  <DescriptionIcon
                    style={{ fontSize: 30, color: 'white' }}
                  ></DescriptionIcon>
                </IconButton>
                <IconButton>
                  <FilterListIcon
                    style={{ fontSize: 30, color: 'white' }}
                  ></FilterListIcon>
                </IconButton>
              </StyledTableCell>
            </>
          }
          itens={arrayItems.map(order => (
            <StyledTableRow>
              <StyledTableCell>
                <IconButton disabled={order.situation === 'Cancelado'}>
                  <CreateIcon fontSize="small"></CreateIcon>
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>{order.number}</StyledTableCell>
              <StyledTableCell>{order.farmer}</StyledTableCell>
              <StyledTableCell>{order.situation}</StyledTableCell>
              <StyledTableCell>{order.date}</StyledTableCell>
              <StyledTableCell>
                <IconButton>
                  <InputIcon></InputIcon>
                </IconButton>
                <IconButton disabled={order.situation === 'Cancelado'}>
                  <DeleteForeverIcon fontSize="small"></DeleteForeverIcon>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        />
      </Container>
    </DefaultContainer>
  )
}

export default donationOder
