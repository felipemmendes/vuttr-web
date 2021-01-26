import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 75%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.bg};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Source Sans Pro', sans-serif;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  @media(min-width: 376px){
    :root{
      font-size: 100%;
    }
  }

  @media(min-width: 769px){
    :root{
      font-size: 125%;
    }
  }

  .ReactModal__Html--open,
  .ReactModal__Body--open {
    overflow: hidden;
  }
`;
