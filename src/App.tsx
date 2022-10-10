import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/themes/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <h1>okok</h1>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
