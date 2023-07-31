import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./Global";
import ShowCate from "./pages/CategoryPage/ShowCate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </ThemeProvider>
);
