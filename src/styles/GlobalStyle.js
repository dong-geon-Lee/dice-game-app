import { createGlobalStyle, css } from "styled-components";

const size = {
  mobile: "500px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: inherit;
  }
  

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;    
    line-height: 1.5;
    background-color: beige;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export default GlobalStyle;
