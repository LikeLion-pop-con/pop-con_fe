import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import LargeCard from "../../Components/Card/LargeCard";
import NavigationBar from "../../Components/Navigate/Navigate";
import Margin from "../../Components/Margin/Margin";
import { useEffect } from "react";
import * as api from "../../api";
import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

const Title = styled.div`
  margin: 5%;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
`;
const ReservationCancelForm = styled.div`
  background-color: white;
  position: fixed;
  width: 30vw;
  height: 60vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
`;
const Myreservation = () => {
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const user_id = localStorage.getItem("Pk");

  const getData = async () => {
    if (user_id) {
      const response = await api.getMypopupreservation(user_id);
      console.log(response);
      setData(response);
    }

    console.log(data);
  };
  useEffect(() => {
    getData();

    console.log(data[0]?.popup_main_image);
  }, []);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Title>
        <Typo size="1.3rem" weight="400">
          나의 예약
        </Typo>
      </Title>
      <Horizon width="350px"></Horizon>
      {data.map((item, index) => (
        <>
          <LargeCard
            title={item?.popup?.popup_name}
            image={"https://popcon.store" + item?.popup?.popup_main_image}
            space={item?.popup?.popup_detailplace}
            date={item?.popup?.popup_date}
            detail={item?.popup_reservation_time}
            popcategory={item?.popup_reservation_date}
            layoutId={index}
            onClick={() => setIsClicked((prev) => !prev)}
          />
          {isClicked && (
            <Overlay onClick={() => setIsClicked((prev) => !prev)}>
              <ReservationCancelForm layoutId={index}></ReservationCancelForm>
            </Overlay>
          )}
        </>
      ))}
      <Margin height="20" />
      <NavigationBar />
    </Wrapper>
  );
};

export default Myreservation;
