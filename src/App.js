import React, { useState, useCallback } from "react";
import "./App.css";
import GlobalStyle, { ThemeProvider } from "./theme";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
