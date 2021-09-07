import React from 'react'
import { CustomTable } from '../../app/components/CustomTable'

import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { StyledTableRow } from '../../app/components/StyledTableRow'
import { IconButton } from '@material-ui/core';
import { StyledTableCellCustom } from './styles';

const farmer: React.FC = () => {
  const arrayItems = [
    {number: 1, farmer: 'Agricultor A', cpf: '111.222.333-44', date: '2021/09/07'},
    {number: 2, farmer: 'Agricultor B', cpf: '111.222.333-44', date: '2021/09/07'},
    {number: 3, farmer: 'Agricultor C', cpf: '111.222.333-44', date: '2021/09/07'},
    {number: 4, farmer: 'Agricultor D', cpf: '111.222.333-44', date: '2021/09/07'},
    {number: 5, farmer: 'Agricultor E', cpf: '111.222.333-44', date: '2021/09/07'},
    {number: 6, farmer: 'Agricultor F', cpf: '111.222.333-44', date: '2021/09/07'}
  ]

  return (
    <DefaultContainer breadcrumbs={['Agricultor']}>
      <CustomTable
        headerColumns={<>
          <StyledTableCellCustom>Nome Aricultor</StyledTableCellCustom>
          <StyledTableCellCustom>CPF</StyledTableCellCustom>
          <StyledTableCellCustom>Validade DAP</StyledTableCellCustom>
        </>}
        itens={<>
          {arrayItems.map(usuario => (
            <StyledTableRow>
              <StyledTableCellCustom>
                <IconButton>
                  <CreateIcon fontSize="small"></CreateIcon>
                </IconButton>
              </StyledTableCellCustom>
              <StyledTableCellCustom>{usuario.farmer}</StyledTableCellCustom>
              <StyledTableCellCustom>{usuario.cpf}</StyledTableCellCustom>
              <StyledTableCellCustom>{usuario.date}</StyledTableCellCustom>
              <StyledTableCellCustom>
                <IconButton>
                  <DeleteForeverIcon fontSize="small"></DeleteForeverIcon>
                </IconButton>
              </StyledTableCellCustom>
            </StyledTableRow>
          ))}
        </>} itemCount={arrayItems.length} rowsPerPage={5} currentPage={1} handleChangePage={ ()=>{}
        }
      />
    </DefaultContainer>
  )
}

export default farmer
