import React, { Component } from "react";
import Form from "./Form";
import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import TableData from "./Table";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Serif, serif",
  },
});

export default class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Menu />
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route exact path="/edit/:id" element={<Form />} />
            <Route exact path="/table" element={<TableData />} />
          </Routes>
        </ThemeProvider>
      </>
    );
  }
}
