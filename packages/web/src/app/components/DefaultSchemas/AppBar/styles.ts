import { styled } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 100
  }
}))
