import styled from '@emotion/styled'
import { TableRow } from '@mui/material'

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0
  },
  '&:hover': {
    border: 0,
    margin: 0,

    cursor: 'pointer'
  }
}))
