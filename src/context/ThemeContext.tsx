import React, { useCallback, useEffect, useState } from "react"
import { createTheming, ThemeProvider } from "react-jss"

interface MyTheme extends Jss.Theme {
  dark: boolean | null | undefined
  toggleDark: () => void
}
type Props = {
  children?: JSX.Element | null
}

// const defaultState = {
//   dark: false,
//   toggleDark: () => {},
// }
// const ThemeContext = React.createContext(defaultState)
// const theming = createTheming(ThemeContext)
// const {ThemeProvider} = theming
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

const MyThemeProvider = ({ children = null }: Props) => {
  const [dark, setDark] = useState(() =>
    !!JSON.parse(localStorage.getItem("dark") || "{}")
  )
  const toggleDark = useCallback(() => {
    let newDark = !dark
    localStorage.setItem("dark", JSON.stringify(newDark))
    setDark(newDark)
  }, [dark])

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("dark") || "{}")
    // console.log(isDark)

    if (isDark) {
      setDark(true)
    } else if (supportsDarkMode()) {
      setDark(true)
    }
  }, [])

  return (
    <ThemeProvider
      theme={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeProvider>
  )
}

// export default ThemeContext
export { MyThemeProvider, MyTheme }
