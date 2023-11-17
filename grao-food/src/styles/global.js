import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    body {
      font-size: 16px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    body {
      font-size: 18px;
    }
  }

  @media (min-width: 1201px) {
    body {
      font-size: 20px;
    }
  }

`;

export default GlobalStyle;