import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import GlobalStyle from './components/global';
import NavBar from './components/nav';

function App() {
  return (
  <ThemeProvider breakpoints={['sm','md','lg']} minBreakpoint="sm">
    <header>
      <GlobalStyle />
      <NavBar/>
    </header>
  </ThemeProvider>
  );
}

export default App;
