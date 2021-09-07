import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import React from 'react'

export interface CustomTableProps {
  itens: React.ReactNode
  headerColumns: React.ReactNode
  itemCount: number
  rowsPerPage: number
  currentPage: number
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void
  handleChangeRowsPerPage?: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >
}

export const CustomTable: React.FC<CustomTableProps> = ({
  itens,
  headerColumns: columns,
  itemCount,
  rowsPerPage,
  currentPage,
  handleChangePage,
  handleChangeRowsPerPage
}: CustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>{columns}</TableRow>
        </TableHead>
        <TableBody>{itens}</TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              count={itemCount}
              rowsPerPage={rowsPerPage}
              page={currentPage}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page'
                },
                native: true
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
