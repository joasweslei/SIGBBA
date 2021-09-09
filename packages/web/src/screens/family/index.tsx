import { CustomTable } from '../../app/components/CustomTable'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { StyledTableCellCustom } from '../../app/components/StyledTableCellCustom';
import { StyledTableRow } from '../../app/components/StyledTableRow'

const FamilyList: React.FC = () => {
  return (
    <DefaultContainer breadcrumbs={['Familias']}>
      <CustomTable
        headerColumns={
          <>
            <StyledTableCellCustom>Nome Aricultor</StyledTableCellCustom>
            <StyledTableCellCustom>CPF</StyledTableCellCustom>
            <StyledTableCellCustom>Validade DAP</StyledTableCellCustom>
          </>
        }
        itens={
          <>
            <StyledTableRow>
              <StyledTableCellCustom></StyledTableCellCustom>
              <StyledTableCellCustom>teste</StyledTableCellCustom>
              <StyledTableCellCustom>teste</StyledTableCellCustom>
              <StyledTableCellCustom>teste</StyledTableCellCustom>
              <StyledTableCellCustom></StyledTableCellCustom>
            </StyledTableRow>
          </>
        }
        itemCount={0}
        rowsPerPage={5}
        currentPage={1}
        handleChangePage={() => {}}
      />
    </DefaultContainer>
  )
}
export default FamilyList
