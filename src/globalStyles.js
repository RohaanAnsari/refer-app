import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  html,
  body {
    margin: 0;
    padding: 0;
    background: #FFF5FD;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body {
    height: 100vh;
  }

`;



export default GlobalStyles;