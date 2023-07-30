import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Global";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
);
