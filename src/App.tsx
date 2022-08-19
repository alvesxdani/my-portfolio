import GlobalStyle from './components/themes/global';
import NavBar from './components/nav/nav';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './components/themes/light';
import dark from './components/themes/dark';
import usePersistedState from './components/utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

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
