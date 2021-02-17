import styled from "@emotion/styled"

export const FormContainer = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
`

export const FormStyled = styled.form`
  display: flex;
`

export const Select = styled.select`
  height: 50px;
  width: 70px;
  background: black;
  color: white;
  text-align: center;
  border: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const Option = styled.option`
  font-size: 20px;
  padding: 10px;
`
