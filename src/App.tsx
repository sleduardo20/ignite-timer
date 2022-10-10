import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export const App = ()=> {
  return (
    <ThemeProvider theme={defaultTheme}>
     <div className="App">
     <h1>okok</h1>
    </div>
    </ThemeProvider>
  );
}

export default App;
