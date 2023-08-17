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
import { AnimatePresence, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReservationCancelForm = styled(motion.div)`
  background-color: white;
  width: 30vw;
  @media (max-width: 768px) {
    width: 330px;
  }
  height: 70vh;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgBox = styled.img`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;
const Form = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 20px;
  button {
    place-self: center;
    grid-column: span 2;
  }
`;
const CancelBtn = styled.button`
  width: 70%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  color: black;
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

  const canceltoast = () => {
    toast.success("예약이 취소되었습니다.", {
      style: {
        marginTop: 20,
      },
    });
  };
  const handleCancel = () => {
    canceltoast();

    // data axios delete
  };

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Title>
        <Typo size="1.3rem" weight="400">
          나의 예약
        </Typo>
      </Title>
      <Horizon width="350px"></Horizon>
      <Margin height="15" />
      {data.map((item, index) => (
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          layoutId={item?.id + ""}
        >
          <LargeCard
            title={item?.popup?.popup_name}
            image={"https://popcon.store" + item?.popup?.popup_main_image}
            space={item?.popup?.popup_detailplace}
            date={item?.popup?.popup_date}
            detail={item?.popup_reservation_time}
            popcategory={item?.popup_reservation_date}
            onClick={() => {
              setIsClicked(true);
              setPopup(item);
            }}
          />

          <Margin height="10" />
        </motion.div>
      ))}
      {isClicked && (
        <AnimatePresence>
          <Overlay
            transition={{ type: "tween" }}
            onClick={() => setIsClicked(false)}
          >
            <ReservationCancelForm layoutId={popup?.id + ""}>
              <ImgBox
                image={"https://popcon.store" + popup?.popup?.popup_main_image}
              ></ImgBox>
              <Margin height="30" />
              <Form>
                <Typo style={{ marginLeft: 7 }} weight="600">
                  팝업 이름
                </Typo>
                <Typo style={{ width: "100%" }}>
                  {popup?.popup?.popup_name}
                </Typo>
                <Typo style={{ marginLeft: 7 }} weight="600">
                  팝업 분류
                </Typo>
                <Typo style={{ width: "100%" }}>
                  {popup?.popup?.popup_category}
                </Typo>
                <Typo style={{ marginLeft: 7 }} weight="600">
                  팝업 날짜
                </Typo>
                <Typo style={{ width: "100%" }}>
                  {popup?.popup?.popup_date?.split("*")[0]}
                </Typo>
                <Typo style={{ marginLeft: 7 }} weight="600">
                  팝업 장소
                </Typo>
                <Typo style={{ width: "100%" }}>
                  {popup?.popup?.popup_detailplace}
                </Typo>
                <CancelBtn onClick={() => handleCancel()}>예약 취소</CancelBtn>
                <Margin height="20" />
              </Form>
            </ReservationCancelForm>
          </Overlay>
        </AnimatePresence>
      )}
      <Margin height="20" />
      <Toaster position="top center" />
      <NavigationBar />
    </Wrapper>
  );
};

export default Myreservation;
