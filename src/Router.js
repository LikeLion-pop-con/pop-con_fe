import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Main from "./pages/MainPage/Main";
import Welcome from "./pages/Welcome/Welcome";
import Search from "./pages/Search/Search";
import Test from "./pages/Test/Test";
import CardTest from "./pages/Test/CardTest";
import Mypage from "./pages/MyPage/MypageMain";
import Myreservation from "./pages/MyPage/Myreservation";
import MypopLike from "./pages/MyPage/MypopLike";
import Mypoprequest from "./pages/MyPage/Mypoprequest";
import MyBrandLike from "./pages/MyPage/MyBrandLike";
import KnowList from "./pages/MyPage/KnowList";
import Introduce from "./pages/MyPage/Introduce";
import Cate from "./pages/ShowPopupCardPage/Cate";
import Ing from "./pages/ShowPopupCardPage/Ing";
import Requesting from "./pages/ShowPopupCardPage/Requesting";
import ShowCate from "./pages/CategoryPage/ShowCate";
import BrandIntroduce from "./pages/BrandIntroduce/BrandIntroduce";
import LogoWelcome from "./pages/LogoWelcome/LogoWelcome";
import PopupPost from "./pages/PopupPost/PopupPost";
import NewBrand from "./pages/MainPlusPage/NewBrand";
import NewArtist from "./pages/MainPlusPage/NewArtist";
import Weekly from "./pages/MainPlusPage/Weekly";
import PostList from "./pages/MainPlusPage/PostList";
import Login from "./pages/Login/Login";
import Resister from "./pages/Login/Resister";
import Searchresult from "./pages/Search/Searchresult";
import { SearchProvider } from "../../pop-con_fe/src/Components/SearchBar/SearchContext"

import PopupInfo from "./pages/PopupInfo/PopupInfo"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <SearchProvider>
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
          <Route path="/search/result" element={<Searchresult />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Brand" element={<BrandIntroduce />} />
          <Route path="/main/:cateId" element={<Cate />}>
            <Route path="" element={<Ing />}></Route>
            <Route path="ing" element={<Requesting />}></Route>
          </Route>

          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Mypage/Myreservation" element={<Myreservation />} />
          <Route path="/Mypage/MypopLike" element={<MypopLike />} />
          <Route path="/Mypage/Mypoprequest" element={<Mypoprequest />} />
          <Route path="/Mypage/MyBrandLike" element={<MyBrandLike />} />
          <Route path="/Mypage/Knowlist" element={<KnowList />} />
          <Route path="/Mypage/introduce" element={<Introduce />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Resister" element={<Resister />} />
          <Route path='/Brand' element={<BrandIntroduce />} />
          <Route path="*" element={<div>없는페이지임</div>} />
          <Route path="/:cateId" element={<Cate />}>
            <Route path="" element={<Ing />}></Route>
            <Route path="ing" element={<Requesting />}></Route>
          </Route>
          <Route path='/PostList' element={<PostList/> } />
          <Route path='/PopupPost' element={<PopupPost/> } />
          <Route path="/popupinfo" element={<PopupInfo/>}/>

          <Route path="*" element={<div>없는페이지임</div>} />
          
        </Route>
      </Routes>
     </SearchProvider>
    </BrowserRouter>
  );
}
export default Router;
