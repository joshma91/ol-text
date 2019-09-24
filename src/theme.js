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
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const theme = {
  primary: "#c886e5",
  secondary: "#caadde",
  tertiary: "#f6ecbf",
  background: "#f9f9f9"
};

export function ThemeProvider({ children }) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
