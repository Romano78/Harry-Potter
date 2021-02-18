import styled from "@emotion/styled"

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    color: white;
    font-size: 15px;
    font-family: Arial;

    @media (min-width: ${props => props.theme.breakPoints.md}) {
      font-size: 30px;
    }
  }
`
