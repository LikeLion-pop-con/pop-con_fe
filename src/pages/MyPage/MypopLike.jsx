import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import Margin from "../../Components/Margin/Margin";
import { getMypageMylikepopup } from "../../api";
import LargeCard from "../../Components/Card/LargeCard";
import NavigationBar from "../../Components/Navigate/Navigate";
import { useNavigate } from "react-router-dom";
import { useScroll } from "framer-motion";
const Title = styled.div`
  margin: 5%;
`;
const Wrapper = styled.div`
  margin: 20px;
`;

const MypopLike = () => {
  const user_id = localStorage.getItem("Pk");
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const getUserLike = async () => {
    if (user_id) {
      const likelist = await getMypageMylikepopup(user_id);

      console.log(likelist);
      setData(likelist);
    }

    console.log(data);
  };

  useEffect(() => {
    if (user_id) {
      getUserLike();
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
  }, []);
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
      {data?.map((item) => (
        <LargeCard
          image={"https://popcon.store" + item?.popup_main_image}
          title={item?.popup_name}
          popcategory={item?.popup_category}
          detail="창작 예술"
          space={item?.popup_detailplace}
          date={item?.popup_date}
        />
      ))}
      <NavigationBar />
    </>
  );
};

export default MypopLike;
