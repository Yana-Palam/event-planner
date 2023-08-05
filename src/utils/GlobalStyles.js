import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    
  }
  body {
    margin: 0;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }



  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    padding:0;
    margin:0;
  }




`;

export default GlobalStyles;
