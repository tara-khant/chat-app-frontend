import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f5f6fa;
    color: #2f3640;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
