import "./src/styles/global.less"
import React from "react"
// import { MyThemeProvider } from "react-jss"
import { MyThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <MyThemeProvider>{element}</MyThemeProvider>
)
