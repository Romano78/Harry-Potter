import React from "react"
import { Global, css } from "@emotion/core"
import "../Css/typography.css"

export const theme = {
  breakPoints: {
    md: "1440px",
  },
  colors: {
    black: "black",
    red: "red",
  },
  fontSize: {
    h1: "80px",
  },
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        color: ${theme.colors.black};
        font-family: "ParryHotter";
        scroll-behavior: smooth;
        overflow: visible;
        background: #ffff;
        margin: 0;
        padding: 0;
      }
      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        overflow-y: scroll;
      }
    `}
  />
)
