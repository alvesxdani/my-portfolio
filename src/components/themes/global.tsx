import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Calibri',sans-serif;
}

html {
  width: 100vw;
}

body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
}
`;