import GlobalStyle from './components/themes/global';
import NavBar from './components/nav/nav';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './components/themes/light';
import dark from './components/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

const toggleTheme = () => {
  setTheme(theme.title === 'light' ? dark : light);
}

  return (
    <ThemeProvider theme={theme}>
      <header>
        <GlobalStyle />
        <NavBar toggleTheme={toggleTheme}/>
        Teste
      </header>
    </ThemeProvider>
  );
}

export default App;
