import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import PostCard from "../../Components/Card/PostCard";
import PostCardimg1 from "../../assets/Icons/Card/PostCardimg1.png";
import Footer from "../../Components/Footer/Footer";
import PostCardimg2 from "../../assets/Icons/Card/PostCardimg1.png";
import { useParams } from "react-router-dom";
import * as api from "../../api";
import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import NavigationBar from "../../Components/Navigate/Navigate";
const Title = styled.div`
  width: 100%;
  padding-left: 3rem;
`;
const PopupWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
`;
const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`   

function PopupPost() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandId = queryParams.get("id");
  const [brandpop,setbrandpop] = useState([]);
  const navigate = useNavigate();
  const getbrandpost = async () => {
    console.log(brandId)
    const Postdata = await api.getbrandpost(brandId);
    setbrandpop(Postdata);
    console.log(Postdata);
  };
  useEffect(() => {
    getbrandpost();
  }, []);
  if (!brandpop || brandpop.length === 0) {
    return null;
  }
  return (
    <>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">팝업 포스트</Typo>
      </Title>
      <Margin height="20" />
      <CardBlock>
        <PostCard 
            image={"https://popcon.store" + brandpop[0].brandpost_image}
            title={brandpop[0].brandpost_name}
            type="추천 포스트"
            main={brandpop[0].brandpost_intro}/>
      </CardBlock>
      <Margin height="20" />
      <NavigationBar/>
      <Footer/>
    </>
  );
}
export default PopupPost;
