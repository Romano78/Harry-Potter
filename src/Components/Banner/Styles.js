import styled from "@emotion/styled"

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    @media (min-width: ${props => props.theme.breakPoints.md}) {
      font-size: ${props => props.theme.fontSize.h1};
      margin-bottom: 0;
    }
  }
`
