import React from 'react'
import {
  StyledBox,
  StyledTypography,
  StyledArrowBackIosRounded
} from './styles'

interface BackwardButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const BackwardButton: React.FC<BackwardButtonProps> = ({
  onClick
}: BackwardButtonProps) => {
  return (
    <StyledBox onClick={onClick}>
      <StyledArrowBackIosRounded />
      <StyledTypography variant="button" noWrap>
        Voltar
      </StyledTypography>
    </StyledBox>
  )
}
