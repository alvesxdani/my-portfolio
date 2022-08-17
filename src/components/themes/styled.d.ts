import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secundary: string,
      background: string,
      backgroundNav: string,
      text: string,
      links: string
    },
  }
};