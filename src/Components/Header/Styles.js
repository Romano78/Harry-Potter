import styled from "@emotion/styled"

export const HeaderContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.black};

  h2 {
    margin: 0;
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    color: white;
    padding-top: 20px;
  }
`
