import React from 'react'
import {
  StyledBox,
  StyledTypography,
  StyledArrowBackIosRounded
} from './styles'

export const BackwardButton = () => {
  return (
    <StyledBox>
      <StyledArrowBackIosRounded />
      <StyledTypography variant="button" noWrap>
        Voltar
      </StyledTypography>
    </StyledBox>
  )
}
