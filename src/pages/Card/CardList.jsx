import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Margin from "../../Components/Margin/Margin";
import { useNavigate } from "react-router-dom";
import Cardpic from "../../assets/Icons/Bank/lovepik-credit-card-png-image_400179469_wh860-removebg-preview.png";
import Nong from "../../assets/Icons/Bank/농협.svg";
import Kook from "../../assets/Icons/Bank/국민은행.svg";
import Shin from "../../assets/Icons/Bank/신한.svg";
import City from "../../assets/Icons/Bank/시티은행.svg";
import Woori from "../../assets/Icons/Bank/우리은행.svg";
import Kako from "../../assets/Icons/Bank/카카오뱅크.svg";
import Toss from "../../assets/Icons/Bank/토스뱅크.svg";
import Hana from "../../assets/Icons/Bank/하나.svg";
import Ki from "../../assets/Icons/Bank/기업.svg";
import NavigationBar from "../../Components/Navigate/Navigate";
import * as api from "../../api";
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;
const Title = styled.div`
  font-size: 1.5rem;
  margin-left: 10%;
  font-weight: bold;
`;
const MYCardList = styled.div``;

const CardCom = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

const CardNum = styled.div`
  font-size: 1.2rem;
`;

const AddButton = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) =>
    props.modalOpen ? "rgb(0, 0, 0)" : props.wrapperBgColor};
  margin-top: 40px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  transition: background-color 0.3s;
`;

const Card = styled.div`
  width: 300px;
  height: 80px;
  background-color: transparent;
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  margin-left: 8%;
`;
const Cardtext = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  margin-left: 10px;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  height: 60%;
`;
const Img1 = styled.img`
  width: 50px;
  margin-left: 5%;
  margin-bottom: 35px;
  margin-right: 20px;
`;
const Img = styled.img`
  width: 70px;
  margin-left: 5%;
`;
const AddButton1 = styled.div`
  width: 80%;
  height: 40px;
  background-color: lightgray;
  margin-top: 30px;
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
  height: 30vh;
  z-index: 10;
`;

const CardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const [CardData, setCardData] = useState([]);
  useEffect(() => {
    getCardinfo();
  }, []);
  const getCardinfo = async () => {
    const id = localStorage.getItem("Pk");
    const cardinfo = await api.getCardinfo(id);
    setCardData(cardinfo);
    console.log(cardinfo);
  };
  const logoMap = {
    농협: Nong,
    국민은행: Kook,
    신한은행: Shin,
    시티은행: City,
    우리은행: Woori,
    카카오뱅크: Kako,
    토스뱅크: Toss,
    하나은행: Hana,
    기업은행: Ki,
  };
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
      <Margin height="50" />
      <Title>결제수단 관리</Title>
      <AddButton onClick={() => setIsModalOpen((prev) => !prev)}>
        <Img src={Cardpic} />
        <Text>계좌 / 카드 등록하기</Text>
      </AddButton>
      <MYCardList>
        {CardData.map((card, index) => (
          <Card key={index}>
            <Img1 src={logoMap[card.bank]} />
            <Cardtext>
              <CardCom>{card.bank}</CardCom>
              {card.bank_account_number !== null && (
                <div>계좌 {card.bank_account_number}</div>
              )}
              {card.card_number !== null && <div>카드 {card.card_number}</div>}
            </Cardtext>
          </Card>
        ))}
      </MYCardList>
      <Margin height="40" />
      <AnimatePresence initial={false}>
        <Toast
          animate={{ y: isModalOpen ? "-5vh" : "100vh" }}
          transition={{ type: "tween" }}
        >
          <ButtonBox>
            <AddButton1 onClick={() => navigate("addcard1")}>
              신용/체크카드
            </AddButton1>
            <AddButton1 onClick={() => navigate("addaccount")}>
              은행계좌
            </AddButton1>
          </ButtonBox>
        </Toast>
        <NavigationBar />
      </AnimatePresence>
    </Wrapper>
  );
};

export default CardList;
