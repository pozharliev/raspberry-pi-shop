import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  #root {
    margin: 0 auto;
  }
`;

export const theme: DefaultTheme = {
	color1: "#BC1243",
	gradientColorFrom: "#9B12BC",
	gradientColorTo: "#BC1142",
};

export default GlobalStyles;
