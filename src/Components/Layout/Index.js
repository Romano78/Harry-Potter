import React from "react"
import styled from "@emotion/styled"
import Header from "../Header"
const Wrapper = styled.div``

const Index = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

export default Index
