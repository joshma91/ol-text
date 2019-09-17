import React from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledComponentsThemeProvider
} from "styled-components";

export default createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Inter, sans-serif;
    background-color: #f6ecbf;
  }
`;

const theme = {
  primary: "#f6ecbf",
  secondary: "#caadde",
  tertiary: "#c886e5",
  background: "#f9f9f9"
};

export function ThemeProvider({ children }) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
