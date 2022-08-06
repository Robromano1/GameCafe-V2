import React from "react";
import HomeContent from "./views/Home";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeContent />
    </ThemeProvider>
  );
}

export default App;
