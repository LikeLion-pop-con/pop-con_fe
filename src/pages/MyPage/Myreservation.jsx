import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import SliderY from "../../Components/WrapperY/SliderY";
import LargeCard from "../../Components/Card/LargeCard";
import NavigationBar from "../../Components/Navigate/Navigate";
import Margin from "../../Components/Margin/Margin";
import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";
import { useEffect } from "react";
import * as api from "../../api";
import { useState } from "react";

const Title = styled.div`
  margin: 5%;
`;
const Wrapper = styled.div`
  margin: 20px;
`;
const Myreservation = () => {
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState({});

  const getData = async () => {
    console.log(localStorage.getItem("Pk"));
    if (localStorage.getItem("Pk")) {
      const response = await api.getMypopupreservation(
        localStorage.getItem("Pk")
      );
      console.log(response);
      setData(response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Title>
        <Typo size="1.3rem" weight="400">
          나의 예약
        </Typo>
      </Title>
      <Horizon width="350px">{data?.map((item) => {})}</Horizon>
      <Margin height="20" />
      {}
      <NavigationBar />
    </>
  );
};

export default Myreservation;
