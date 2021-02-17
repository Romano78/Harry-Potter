import React from "react"
import { FormStyled, Select, FormContainer } from "./Styles"
import Button from "../Utilities/Button"

const Form = props => {
  return (
    <FormContainer>
      <FormStyled onSubmit={props.onSubmitHandler}>
        <Select value={props.value} onChange={props.onChangeHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>
        <Button house={props.type}>Add</Button>
      </FormStyled>
      <button onClick={props.clicked}>Substract</button>
    </FormContainer>
  )
}

export default Form
