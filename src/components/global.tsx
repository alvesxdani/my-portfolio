import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Calibri',sans-serif;
  color: #000;
}

html {
  width: 100vw;
}
`;

export default GlobalStyle;