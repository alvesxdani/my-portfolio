import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Montserrat',sans-serif;
}

html body {
  width: 100vw;
}

body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
}

a {
  text-decoration: none;
}
`;