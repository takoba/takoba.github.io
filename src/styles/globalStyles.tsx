"use client"

import React from "react"
import { css, Global } from "@emotion/react"

const customStyles = css`
  body {
    /* theme\`colors.amber.600\` */
    -webkit-tap-highlight-color: #d97706;
    /* tw\`antialiased\` */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const GlobalStyles = (): JSX.Element => (
  <>
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
