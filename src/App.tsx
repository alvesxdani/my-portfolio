import GlobalStyle from './components/themes/global';
import NavBar from './components/nav';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './components/themes/light';
import dark from './components/themes/dark';
import usePersistedState from './components/utils/usePersistedState';
import Intro from './components/intro';

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
      </header>

      <Intro/>

    </ThemeProvider>
  );
}

export default App;
