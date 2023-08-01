import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Main from "./pages/MainPage/Main";
import Welcome from "./pages/Welcome/Welcome";
import Search from "./pages/Search/Search";
import Test from "./pages/Test/Test";
import CardTest from "./pages/Test/CardTest";
import Cate from "./pages/ShowPopupCardPage/Cate";
import Ing from "./pages/ShowPopupCardPage/Ing";
import Requesting from "./pages/ShowPopupCardPage/Requesting";
import ShowCate from "./pages/CategoryPage/ShowCate";
import BrandIntroduce from "./pages/BrandIntroduce/BrandIntroduce";
import LogoWelcome from "./pages/LogoWelcome/LogoWelcome";
import NewBrand from "./pages/MainPlusPage/NewBrand";
import NewArtist from "./pages/MainPlusPage/NewArtist";
import Weekly from "./pages/MainPlusPage/Weekly";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<LogoWelcome />} />

          <Route path="/main" element={<Main />}>
            <Route path="art" element={<Main />}></Route>
            <Route path="lit" element={<Main />}></Route>
            <Route path="video" element={<Main />}></Route>
            <Route path="music" element={<Main />}></Route>
          </Route>
          <Route path="/category" element={<ShowCate />}></Route>
          <Route path="/newbrand" element={<NewBrand />}></Route>
          <Route path="/newartist" element={<NewArtist />}></Route>
          <Route path="/CardTest" element={<CardTest />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/weekly" element={<Weekly />}></Route>
          <Route path="/search" element={<Search />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Brand" element={<BrandIntroduce />} />
          <Route path="*" element={<div>없는페이지임</div>} />
          <Route path="/main/:cateId" element={<Cate />}>
            <Route path="" element={<Ing />}></Route>
            <Route path="ing" element={<Requesting />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
