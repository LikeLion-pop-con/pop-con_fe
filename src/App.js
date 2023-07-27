import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Router";

import Layout from "./Components/Layout/Layout";
import Main from "./pages/MainPage/Main";
import Welcome from "./pages/Welcome/Welcome";
import GlobalStyle from "./Global";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
       <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/Welcome' element={<Welcome/>} />
        <Route path='*' element={<div>없는페이지임</div>} />
       </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
