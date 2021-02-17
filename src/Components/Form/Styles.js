import styled from "@emotion/styled"

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  width: 90%;
  position: absolute;
  bottom: 10px;
`

export const Select = styled.select`
  height: 50px;
  width: 70px;
  padding: 10px;
  background: black;
  margin-right: 20px;
  color: white;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const Option = styled.option`
  font-size: 20px;
  padding: 10px;
`
