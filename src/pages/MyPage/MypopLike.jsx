import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import Margin from "../../Components/Margin/Margin";
import { getMypageMylikebrand } from "../../api";
import LargeCard from "../../Components/Card/LargeCard";
import NavigationBar from "../../Components/Navigate/Navigate";
import { useNavigate } from "react-router-dom";
const Title = styled.div`
  margin: 5%;
`;
const Wrapper = styled.div`
  margin: 20px;
`;

const MypopLike = () => {
    const storedName = localStorage.getItem("Name");
    const navigate = useNavigate();
  
    if (storedName) {
      getMypageMylikebrand(storedName)
        .then((data) => {
          console.log("API 데이터:", data);
          // 여기서 데이터를 활용하는 코드를 작성할 수 있습니다.
        })
        .catch((error) => {
          console.error("API 데이터를 가져오는 중 오류 발생:", error);
        });
    } else {
      const shouldLogin = window.confirm(
        "로그인이 필요합니다. 로그인하시겠습니까?"
      );
      if (shouldLogin) {
        // 로그인 페이지로 이동하는 코드를 추가합니다.
        navigate("/login");
      } else {
        console.log("로그인이 필요하며 사용자가 로그인을 거부했습니다.");
      }
    }
  return (
    <>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Title>
        <Typo size="1.3rem" weight="400">
          관심 팝업
        </Typo>
      </Title>
      <Horizon width="350px"></Horizon>
      <Margin height="20" />
      <LargeCard
        image="/Card/PostCardimg1.png"
        title="NewJeans의 HYPE맑음"
        popcategory="팝업 스토어"
        detail="창작 예술"
        space={"하텍 해동 스룸G \n인하대학교"}
        date="2023.07.21~2023.08.19"
      />
      <LargeCard
        image="/Card/NewJeans.jpg"
        title="NewJeans의 HYPE맑음"
        popcategory="팝업 스토어"
        detail="창작 예술"
        space={"하텍 해동 스룸G \n인하대학교"}
        date="2023.07.21~2023.08.19"
      />
      <LargeCard
        image="/Card/NewJeans.jpg"
        title="NewJeans의 HYPE맑음"
        popcategory="팝업 스토어"
        detail="창작 예술"
        space={"하텍 해동 스룸G \n인하대학교"}
        date="2023.07.21~2023.08.19"
      />

      <NavigationBar />
    </>
  );
};

export default MypopLike;
