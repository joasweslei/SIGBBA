import styled from "@emotion/styled"
import { ArrowBackIosRounded } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  cursor: 'pointer',

  '&:hover': {
    color: "#000D8B"
  }
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#000DCD"
}))

export const StyledArrowBackIosRounded = styled(ArrowBackIosRounded)(
  ({ theme }) => ({
    color: "#000DCD",
    marginRight: 1,
    fontSize: 18
  })
)
