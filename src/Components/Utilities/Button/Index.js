import React from "react"
import { ButtonContainer, ButtonStyled } from "./Styles"

const Button = props => {
  return (
    <ButtonContainer>
      <ButtonStyled {...props}>{props.children}</ButtonStyled>
    </ButtonContainer>
  )
}

export default Button
