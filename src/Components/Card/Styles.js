import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { ImageContainer } from "../Heads/Styles"

// let value = 100

// transform: ${props =>
//   props.animationRomantard
//     ? `translateY(calc(10px + ${props.animationRomantard}%))`
//     : `translateY(0)`};

const animation = props => {
  if (props.animationRomantard) {
    console.log("romatand")

    return css`
      transform: ${`translateY(-${props.animationRomantard}%)`};
    `
  }

  if (props.animationAigle) {
    return css`
      transform: ${`translateY(-${props.animationAigle}%)`};
    `
  }

  if (props.animationSouffle) {
    return css`
      transform: ${`translateY(-${props.animationSouffle}%)`};
    `
  }

  if (props.animationSouffle) {
    return css`
      transform: ${`translateY(-${props.animationSouffle}%)`};
    `
  }
  if (props.animationGriff) {
    return css`
      transform: ${`translateY(-${props.animationGriff}%)`};
    `
  }
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
  height: 1200px;

  @media (min-width: ${props => props.theme.breakPoints.md}) {
    height: 890px;
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
  position: absolute;
  bottom: 60px;

  img {
    height: 300px;
    width: 300px;
    border-radius: 50%;

    @media (min-width: ${props => props.theme.breakPoints.md}) {
      height: 200px !important;
      width: 200px !important;
    }
  }
`

export const HeadContainer = styled.div`
  /* transform: translateY(calc(10px + 50%)); */
  /* transform: ${props =>
    props.animationRomantard
      ? `translateY(calc(10px + ${props.animationRomantard}%))`
      : `translateY(0)`};

  transform: ${props =>
    props.animationAigle
      ? `translateY(calc(10px + ${props.animationAigle}%))`
      : `translateY(0)`}; */

  ${animation}
`
