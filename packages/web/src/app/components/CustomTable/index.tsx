import { AddCircleRounded, Description, FilterList } from '@mui/icons-material'
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'

import React from 'react'
import { StyledTableCell } from '../StyledTableCell'

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
        <TableHead >
          <TableRow>
            <StyledTableCell align="center">
              <IconButton>
                <AddCircleRounded
                  className="fa fa-plus-circle"
                  style={{ fontSize: 25, color: 'white' }}
                ></AddCircleRounded>
              </IconButton>
            </StyledTableCell>
            {columns}
            <StyledTableCell align = 'center'>
              <IconButton>
                <Description
                  style={{ fontSize: 25, color: 'white' }}
                ></Description>
              </IconButton>
              <IconButton>
                <FilterList
                  style={{ fontSize: 25, color: 'white' }}
                ></FilterList>
              </IconButton>
            </StyledTableCell>
          </TableRow>
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
