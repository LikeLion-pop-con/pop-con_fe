import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import SliderY from "../../Components/WrapperY/SliderY";
import LargeCard from "../../Components/Card/LargeCard";
import NavigationBar from "../../Components/Navigate/Navigate";
import PopupCard from "../../Components/Card/PopupCard";
import Margin from "../../Components/Margin/Margin";
import { useEffect } from "react";
import * as api from "../../api";
import { addPointerEvent } from "framer-motion";
import { useState } from "react";
const Title = styled.div`
  margin: 5%;
`;
const Wrapper = styled.div`
  margin: 20px;
`;
const CategoryMapping = {
  1: "푸드",
  2: "패션 잡화",
  3: "테크 가전",
  4: "뷰티",
  5: "클래스",
  6: "그림",
  7: "문학",
  8: "영상",
  9: "음악",
};
const Mypoppplacerequest = () => {
  const [data, setData] = useState([]);

  const getRequest = async () => {
    const user = localStorage.getItem("Pk");
    console.log(user);
    if (user) {
      const list = await api.getMypoppaceupreservation(user);
      setData(list);
      console.log(data);
    }
  };
  useEffect(() => {
    getRequest();
  }, []);
  
  return (
    <>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Title>
        <Typo size="1.3rem" weight="400">
          공간예약
        </Typo>
      </Title>
      <Horizon width="350px"></Horizon>
      <Margin height="20" />
      {data?.map((item) => (
        <LargeCard
          image={"https://popcon.store" + item?.popupplace.popup_place_image01}
          title={"예약 장소 : " + item?.popupplace.popup_place_title}
          popcategory={"지하 : " + item?.popupplace_reserved_basement_floor + "층\n 지상 : " + item?.popupplace_reserved_ground_floor + "층"}
          space={"예약 날짜 : " + item?.popupplace_reserved_date}
          date={item?.popupplace.popup_place_location
          }
        />
      ))}

      <NavigationBar />
    </>
  );
};

export default Mypoppplacerequest;
