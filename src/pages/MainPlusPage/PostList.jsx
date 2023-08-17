import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import PostCard from "../../Components/Card/PostCard";
import PostCardimg1 from "../../assets/Icons/Card/PostCardimg1.png";
import Footer from "../../Components/Footer/Footer";
import PostCardimg2 from "../../assets/Icons/Card/PostCardimg2.jpg";
import NavigationBar from "../../Components/Navigate/Navigate";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as api from "../../api";
const Title = styled.div`
  width: 100%;
  padding-left: 1.5rem;
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

function PostList() {
  const [PostData, setPostData] = useState([]);
  const navigate = useNavigate();
  const getPostall = async () => {
    const PostData = await api.getbrandpostall();
    setPostData(PostData);
    console.log(PostData);
  };
  useEffect(() => {
    getPostall();
  }, []);
  return (
    <>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">팝업 포스트</Typo>
      </Title>
      <Margin height="20" />
      <CardBlock>
      {PostData?.map((item) => (
              <PostCard
                onClick={() => navigate(`/popuppost/?id=${item?.brand}`)}
                image={"https://popcon.store" + item?.brandpost_image}
                title={item?.brandpost_name}
                type="추천 포스트"
                main={
                  item?.brandpost_intro.length > 50
                    ? item.brandpost_intro.substring(0, 50) + "..."
                    : item.brandpost_intro
                }
              />
            ))}
      </CardBlock>
      <NavigationBar/>
      <Footer/>
    </>
  );
}
export default PostList;
