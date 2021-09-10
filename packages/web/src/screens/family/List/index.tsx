import { CustomTable } from '../../../app/components/CustomTable'
import DefaultContainer from '../../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import { StyledTableCellCustom } from '../../../app/components/StyledTableCellCustom'
import { StyledTableRow } from '../../../app/components/StyledTableRow'
import CreateIcon from '@material-ui/icons/Create'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { IconButton } from '@material-ui/core'

const FamilyList: React.FC = () => {
  const arrayItems = [
    {
      number: 1,
      Family: 'Responsável A',
      cpf: '111.222.333-44',
      dependentes: 5
    },
    {
      number: 2,
      Family: 'Responsável B',
      cpf: '111.222.333-44',
      dependentes: 5
    },
    {
      number: 3,
      Family: 'Responsável C',
      cpf: '111.222.333-44',
      dependentes: 5
    },
    {
      number: 4,
      Family: 'Responsável D',
      cpf: '111.222.333-44',
      dependentes: 5
    },
    {
      number: 5,
      Family: 'Responsável E',
      cpf: '111.222.333-44',
      dependentes: 5
    },
    {
      number: 6,
      Family: 'Responsável F',
      cpf: '111.222.333-44',
      dependentes: 5
    }
  ]
  return (
    <DefaultContainer breadcrumbs={['Familias']}>
      <CustomTable
        headerColumns={
          <>
            <StyledTableCellCustom>Responsável</StyledTableCellCustom>
            <StyledTableCellCustom>CPF do responsável</StyledTableCellCustom>
            <StyledTableCellCustom>Total de dependentes</StyledTableCellCustom>
          </>
        }
        itens={
          <>
            {arrayItems.map(item => (
              <StyledTableRow>
                <StyledTableCellCustom>
                  <IconButton>
                    <CreateIcon fontSize="small"></CreateIcon>
                  </IconButton>
                </StyledTableCellCustom>
                <StyledTableCellCustom>{item.Family}</StyledTableCellCustom>
                <StyledTableCellCustom>{item.cpf}</StyledTableCellCustom>
                <StyledTableCellCustom>
                  {item.dependentes}
                </StyledTableCellCustom>
                <StyledTableCellCustom>
                  <IconButton>
                    <DeleteForeverIcon fontSize="small"></DeleteForeverIcon>
                  </IconButton>
                </StyledTableCellCustom>
              </StyledTableRow>
            ))}
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
