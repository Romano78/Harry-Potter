import styled from "@emotion/styled"

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 40px;

  @media (min-width: ${props => props.theme.breakPoints.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const ScoreP = styled.p`
  font-size: 45px;
  position: absolute;
  top: 0;
  margin-top: 0;
  left: 10px;
  font-weight: bold;
`

export const DeleteButton = styled.button`
  background: black;
  color: white;
  position: absolute;
  bottom: 10px;
  right: 15px;
  height: 50px;

  &:focus {
    outline: none;
  }
`
