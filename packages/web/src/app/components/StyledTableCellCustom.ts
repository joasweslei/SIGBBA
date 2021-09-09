import { styled } from '@material-ui/core'
import { StyledTableCell } from './StyledTableCell'

export const StyledTableCellCustom = styled(StyledTableCell)(({ theme }) => ({
  textAlign: 'center'
}))
