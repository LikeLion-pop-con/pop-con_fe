import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Router";

import Layout from "./Components/Layout/Layout";
import Main from "./pages/MainPage/Main";
import Welcome from "./pages/Welcome/Welcome";
import Search from "./pages/Search/Search"
import GlobalStyle from "./Global";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
       <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/welcome' element={<Welcome/>} />
        <Route path="/search" element={<Search/>}/>
        <Route path='*' element={<div>없는페이지임</div>} />
       </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
