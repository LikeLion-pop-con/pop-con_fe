import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Margin from "../../Components/Margin/Margin";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

const MYCardList = styled.div`
  width: 60%;
  height: 200px;
  background-color: gray;
  border-radius: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid lightgray;
  background: linear-gradient(
    180deg,
    rgba(128, 128, 128, 0.3) 50%,
    transparent 50%
  );
`;

const CardCom = styled.div``;

const CardNum = styled.div``;

const AddButton = styled.div`
  width: 100%;
  height: 150px;

  margin-top: 40px;
  text-align: center;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  height: 60%;
`;

const AddButton1 = styled.div`
  width: 50%;
  height: 40px;
  background-color: lightgray;
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  align-items: center;
  padding: 2px;
  margin: 5px;
  justify-content: center;
`;
const Toast = styled(motion.div)`
  width: 100%;
  border-bottom: none;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: white;
  height: 40vh;
  z-index: 10;
`;

const CardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Wrapper
      animate={{
        backgroundColor: isModalOpen
          ? "rgba(0,0,0,0.5)"
          : "rgba(255,255,255,1)",
      }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <Header left="logo" right={["login", "search"]} />
      <Margin height="100" />
      <MYCardList>
        <CardCom>국민카드</CardCom>
        <CardNum>0000-0000-0000-0000</CardNum>
      </MYCardList>
      <AddButton onClick={() => setIsModalOpen((prev) => !prev)}>
        계좌 / 카드 등록하기
      </AddButton>
      <Margin height="40" />
      <AnimatePresence initial={false}>
        <Toast
          animate={{ y: isModalOpen ? 0 : 300 }}
          transition={{ type: "tween" }}
        >
          <ButtonBox>
            <AddButton1 onClick={() => navigate("addcard")}>
              신용/체크카드
            </AddButton1>
            <AddButton1>은행계좌</AddButton1>
          </ButtonBox>
        </Toast>
      </AnimatePresence>
    </Wrapper>
  );
};

export default CardList;
