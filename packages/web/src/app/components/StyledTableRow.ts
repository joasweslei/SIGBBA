import { styled, TableRow } from '@material-ui/core'

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  },
  '&:hover': {
    border: 0,
    margin: 0,
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer'
  }
}))
