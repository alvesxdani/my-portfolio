import GlobalStyle from './components/themes/global';
import NavBar from './components/nav/nav';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './components/themes/light';


function App() {
  return (
    <ThemeProvider theme={light}>
      <header>
        <GlobalStyle />
        <NavBar/>
        Teste
      </header>
    </ThemeProvider>
  );
}

export default App;
