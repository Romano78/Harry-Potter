import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { ImageContainer } from "../Heads/Styles"

const show = props => {
  console.log(props)
}

const colors = props => {
  switch (props.children[0].props.children) {
    case "Hemsirdaigle":
      return css`
        color: orange;
      `
    case "Romentard":
      return css`
        color: grey;
      `
    case "Gryffobin":
      return css`
        color: yellow;
      `
    case "Paulsouffle":
      return css`
        color: grey;
      `
    default:
      return null
  }
}

const background = props => {
  switch (props.children[0].props.children) {
    case "Hemsirdaigle":
      return css`
        background: blue;
      `
    case "Romentard":
      return css`
        background: green;
      `
    case "Gryffobin":
      return css`
        background: red;
      `
    case "Paulsouffle":
      return css`
        background: yellow;
      `
    default:
      return null
  }
}

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  ${background}
  position: relative;

  @media (min-width: ${props => props.theme.breakPoints.md}) {
    min-height: 940px;
  }

  h3 {
    text-align: center;
    width: 100%;
    ${colors}
    font-size: 30px;
    text-transform: uppercase;
    padding-top: 50px;
  }
`

export const CardImageContainer = styled(ImageContainer)`
  display: flex;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;

  ${show}

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;

    @media (min-width: ${props => props.theme.breakPoints.md}) {
      height: 150px !important;
      width: 150px !important;
    }
  }
`

export const HeadContainer = styled.div``
