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
    background-color: #eeeeee;
  }
`;

const theme = {
  primary: "#222831",
  secondary: "#00adb5",
  tertiary: "#393e46",
  background: "#eeeeee"
};

export function ThemeProvider({ children }) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
