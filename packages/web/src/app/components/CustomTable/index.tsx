import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import React from 'react'

export interface CustomTableProps {
  itens: React.ReactNode
  headerColumns: React.ReactNode
}

export const CustomTable: React.FC<CustomTableProps> = ({
  itens,
  headerColumns: columns
}: CustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>{columns}</TableRow>
        </TableHead>
        <TableBody>{itens}</TableBody>
      </Table>
    </TableContainer>
  )
}
