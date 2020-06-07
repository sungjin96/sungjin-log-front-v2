import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
      text-decoration:none;
      color:inherit;
      cursor: pointer;
      box-sizing: border-box;
  }
  *{
      box-sizing:boerder-box;
  }
  body{
      font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    font-size: 62.5%;


    /* 600 */
    @media only screen and (max-width: 46.9em){
      font-size: 50%;
    }
    /* 1200 */
    @media only screen and (max-width: 93.8em){
      font-size: 56.25%;
    };

    /* @media only screen and (max-width: 75em) {
      font-size: 56.25%;
    }

    @media only screen and (max-width: 56.25em) {
      font-size: 50%;
    }

    @media only screen and (max-width: 112.5em) {
      font-size: 75%;
    } */
  }
  input {
    border: none;

    &:active,
    &:focus {
      outline: none;
    }
  }

  #disqus_thread {
    width: 100%;
  }

  #main-nav {
    padding-left: 1rem;
    padding-right: 1rem;
  }

`;
export default GlobalStyles;

// @media only screen and (max-width: 46.9em) 600;
//   @media only screen and (max-width: 93.8em) 1200;
