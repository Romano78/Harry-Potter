import styled from "@emotion/styled"

export const ImageContainer = styled.div``

export const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;

  @media (min-width: ${props => props.theme.breakPoints.md}) {
    height: 350px;
    width: 350px;
  }
`
