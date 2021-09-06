import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import React from 'react'
import DefaultContainer from '../../app/components/DefaultSchemas/DefaultContainerSchema'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const Home = () => {
  return (
    <DefaultContainer>
      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome cesta</StyledTableCell>
              <StyledTableCell align="left">Descrição</StyledTableCell>
              <StyledTableCell align="right">
                Quantidade alimentos
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Cesta básica
              </StyledTableCell>
              <StyledTableCell align="left">
                descrição de uma cesta básica e que ela é bem básica
              </StyledTableCell>
              <StyledTableCell align="right">16</StyledTableCell>
            </StyledTableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={3}
                rowsPerPage={3}
                page={1}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page'
                  },
                  native: true
                }}
                onPageChange={() => {}}
                onRowsPerPageChange={() => {}}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </DefaultContainer>
  )
}

export default Home
