import React from 'react'
import { StyledTableCellCustom } from './styles'
import { StyledTableRow } from '../../home/styles'
import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { CustomTable } from '../../../app/components/CustomTable'

export const Login = () => {
  return (
   <DefaultContainer breadcrumbs={['Agricultor']}>
      <CustomTable
      headerColumns={<>
        <StyledTableCellCustom>Nome Aricultor</StyledTableCellCustom>
        <StyledTableCellCustom>CPF</StyledTableCellCustom>
        <StyledTableCellCustom>Validade DAP</StyledTableCellCustom>
      </>}
      itens={<>
        <StyledTableRow>
          <StyledTableCellCustom></StyledTableCellCustom>
          <StyledTableCellCustom></StyledTableCellCustom>
          <StyledTableCellCustom></StyledTableCellCustom>
        </StyledTableRow>
      </>} itemCount={0} rowsPerPage={5} currentPage={1} handleChangePage={ ()=>{}
      }
    />
  </DefaultContainer>
)
}
