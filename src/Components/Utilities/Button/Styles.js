import styled from "@emotion/styled"
import { css } from "@emotion/core"

const color = props => {
  if (props.house.house) {
    switch (props.house.house) {
      case "romentard":
        return css`
          color: green;
        `
      case "hemsirdaigle":
        return css`
          color: blue;
        `
      case "paulsouffle":
        return css`
          color: yellow;
        `
      case "gryffobin":
        return css`
          color: red;
        `
      default:
        return null
    }
  }
}

const background = props => {
  if (props.house.house) {
    switch (props.house.house) {
      case "romentard":
        return css`
          background: grey;
        `
      case "hemsirdaigle":
        return css`
          background: orange;
        `
      case "paulsouffle":
        return css`
          background: grey;
        `
      case "gryffobin":
        return css`
          background: yellow;
        `
      default:
        return null
    }
  }
}

export const ButtonContainer = styled.div``

export const ButtonStyled = styled.button`
  width: 150px;
  height: 50px;
  ${color}
  ${background}
  font-weight: bold;
  font-size: 20px;
  border: none;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(4px);
  }
`
