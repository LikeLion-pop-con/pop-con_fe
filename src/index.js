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
<<<<<<< HEAD
    <GlobalStyle/>
     <App />
=======
    <RecoilRoot>
      <App />
    </RecoilRoot>
>>>>>>> d644d91b7601ee0cce884071dc2d1b88ef0d17da
  </ThemeProvider>
);
