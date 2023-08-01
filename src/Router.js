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

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Main />}></Route>
            <Route path="ing" element={<Main />}></Route>
          </Route>
          <Route path="/CardTest" element={<CardTest/>} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/search" element={<Search />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Mypage/Myreservation" element={<Myreservation />} />
          <Route path="/Mypage/MypopLike" element={<MypopLike />} />
          <Route path="/Mypage/Mypoprequest" element={<Mypoprequest />} />
          <Route path="/Mypage/MyBrandLike" element={<MyBrandLike />} />
          <Route path="/Mypage/Knowlist" element={<KnowList />} />
          <Route path="/Mypage/introduce" element={<Introduce />} />
          <Route path="*" element={<div>없는페이지임</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
