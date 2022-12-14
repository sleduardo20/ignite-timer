import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CycleProvider } from './context/CyclesContext';
import { Router } from './routes/Router';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyles } from './styles/themes/global';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </CycleProvider>
    </ThemeProvider>
  );
};

export default App;
