// src/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'K2D', sans-serif;
  }

  body {
    background-color: #d4eac8;
  }

  a {
    text-decoration: none;
  }

  input, button {
    font-family: 'K2D', sans-serif;
  }
`;

export default GlobalStyle;
