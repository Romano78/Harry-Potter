import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@emotion/react"
import { theme, GlobalStyle } from "./src/utils/Styles"
import Layout from "./src/Components/Layout"

const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}

wrapPageElement.propsTypes = {
  element: PropTypes.node.isRequired,
}

export default wrapPageElement
