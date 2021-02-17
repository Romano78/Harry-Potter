import React from "react"
import styled from "@emotion/styled"
import Header from "../Header"
import Footer from "../Footer"
const Wrapper = styled.div``

const Index = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Index
