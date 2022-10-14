import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat',sans-serif;
  font-size: 10px;
}

html body {
  width: 100vw;
  scroll-behavior: smooth;
}

body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}
`;