import { Box, styled, Typography } from '@material-ui/core'
import { ArrowBackIosRounded } from '@material-ui/icons'

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  cursor: 'pointer',

  '&:hover': {
    color: theme.palette.primary.dark
  }
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light
}))

export const StyledArrowBackIosRounded = styled(ArrowBackIosRounded)(
  ({ theme }) => ({
    color: theme.palette.primary.light,
    marginRight: 1,
    fontSize: 18
  })
)
