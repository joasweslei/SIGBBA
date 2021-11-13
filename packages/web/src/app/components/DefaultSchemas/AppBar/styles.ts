import { styled } from '@mui/material'
import { Toolbar } from '@mui/material'

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 100
  }
}))
