import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Main from "./pages/MainPage/Main";
import Welcome from "./pages/Welcome/Welcome";
import Search from "./pages/Search/Search";
import Test from "./pages/Test/Test";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />}>
            <Route path=""></Route>
            <Route path="ing"></Route>
          </Route>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/search" element={<Search />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<div>없는페이지임</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
