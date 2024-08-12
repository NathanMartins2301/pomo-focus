import { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Rounter } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CyclesContextProvider } from "./contexts/CyclesContext"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter >
        <CyclesContextProvider>
          <Rounter />
        </CyclesContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
