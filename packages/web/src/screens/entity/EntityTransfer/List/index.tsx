import { Create, DeleteForever } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { CustomTable } from "../../../../app/components/CustomTable"
import DefaultContainer from "../../../../app/components/DefaultSchemas/Container/DefaultContainerSchema"
import { StyledTableCellCustom } from "../../../../app/components/StyledTableCellCustom"
import { StyledTableRow } from "../../../../app/components/StyledTableRow"

export const EntityTransferList: React.FC = () => {

    const arrayItems = [
        {number: 1, cnpj: '11.222.333/0001-44', nRefeicoes: 1, ativo: 'ativo'},
        {number: 2, cnpj: '11.222.333/0001-44', nRefeicoes: 2, ativo: 'ativo'},
        {number: 3, cnpj: '11.222.333/0001-44', nRefeicoes: 3, ativo: 'ativo'},
        {number: 4, cnpj: '11.222.333/0001-44', nRefeicoes: 4, ativo: 'ativo'},
        {number: 5, cnpj: '11.222.333/0001-44', nRefeicoes: 5, ativo: 'ativo'},
        {number: 6, cnpj: '11.222.333/0001-44', nRefeicoes: 6, ativo: 'ativo'}
      ]

    return (
        <DefaultContainer breadcrumbs = {['Entidade Repasse']}>
            <CustomTable
                headerColumns={<>
                    <StyledTableCellCustom>Entidade</StyledTableCellCustom>
          <StyledTableCellCustom>CNPJ</StyledTableCellCustom>
          <StyledTableCellCustom>Número de refeições</StyledTableCellCustom>
                </>}
                itens={<>
                    {arrayItems.map(entidade => (
                        <StyledTableRow>
                            <StyledTableCellCustom>

                                <IconButton>
                                <Create fontSize="small"></Create>
                                </IconButton>
                                </StyledTableCellCustom>
                                <StyledTableCellCustom>{entidade.number}</StyledTableCellCustom>
                                <StyledTableCellCustom>{entidade.cnpj}</StyledTableCellCustom>
                                <StyledTableCellCustom>{entidade.nRefeicoes}</StyledTableCellCustom>
                                <StyledTableCellCustom>
                                <IconButton>
                                <DeleteForever fontSize="small"></DeleteForever>
                                </IconButton>
                                </StyledTableCellCustom>
                             </StyledTableRow>

                ))}
                </>}




                    itemCount={0}
                    rowsPerPage={0}
                    currentPage={0}
                    handleChangePage={() => { } }
                    />
                        </DefaultContainer>
                        )



}
