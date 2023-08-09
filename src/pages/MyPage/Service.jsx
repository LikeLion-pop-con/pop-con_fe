import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import styled, { css, keyframes } from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import logo from "../../assets/Icons/Header/logo.png";
import NavigationBar from "../../Components/Navigate/Navigate";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Button1 from "../../assets/Icons/Button/Button.svg";
import Button2 from "../../assets/Icons/Button/Button1.svg";
import Richat from "../../assets/Icons/Button/RiChat3Line.svg";
import Margin from "../../Components/Margin/Margin";
const Title = styled.div`
  margin: 5%;
`;
const Title1 = styled.div`
  margin: 5%;
  display: flex;
  align-self: flex-start;
  margin-left: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const Text = styled.p`
  margin: 5%;
  display: flex;
  flex-direction: row;
`;
const Body = styled.div`
  margin: 20px;
  background-color: lightgray;
  width: 90%;
  overflow: hidden;
  height: auto;
  padding: 15px;
  ${({ show }) =>
    show
      ? css`
          animation: ${slideDown} 0.3s ease;
        `
      : css`
          animation: ${slideUp} 0.3s ease;
        `}
`;
const BodyText = styled.p`
  line-height: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 40px;
`;
const slideDown = keyframes`
  0% {
    transform: scaleY(0);
    transform-origin: top; 
  }
  100% {
    transform: scaleY(1);
    transform-origin: top; 
  }`;

const slideUp = keyframes`
  0% {
    transform: scaleY(1);
    transform-origin: top;
  }
  100% {
    transform: scaleY(0);
    transform-origin: top;
  }
`;
const BOX = styled.div`
  background-color: #f8f8f8;
  width: 85%;
  height: 200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Icon = styled.img`
  margin-right: 10px;
`;
const Service = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  const toggleTextVisibility = (boxNumber) => {
    switch (boxNumber) {
      case 1:
        setShowText1((prevShowText) => !prevShowText);
        break;
      case 2:
        setShowText2((prevShowText) => !prevShowText);
        break;
      case 3:
        setShowText3((prevShowText) => !prevShowText);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Header left="logo" right={["login", "search"]} />
      <Title>
        <Typo size="1.3rem" weight="400">
          고객센터
        </Typo>
      </Title>
      <Horizon width="350px"></Horizon>
      <Title1>
        <Typo size="1.3rem" weight="400">
          POPCON입니다.
          <br />
          <br />
          무엇을 도와드릴까요?
        </Typo>
      </Title1>
      <Horizon width="350px" color="#EBEBEB" />
      <Title1>
        <Typo size="1.1rem" weight="400">
          자주묻는 질문
        </Typo>
      </Title1>
      <Wrapper>
        <Text>
          <Icon src={Richat} />
          꼭! 읽어주세요. 일부 정책이 변경됩니다.
          <Button onClick={() => toggleTextVisibility(1)}>
            {showText1 ? (
              <IoIosArrowUp size={25} color="gray" />
            ) : (
              <IoIosArrowDown size={25} color="gray" />
            )}
          </Button>
        </Text>

        <Horizon width="350px" color="#EBEBEB" />
        {showText1 && (
          <Body show={showText1}>
            <BodyText>
              POPCON 사용자 여러분, 만우절에 센스업게 진지한 당부의 말씀을
              드리게 되었습니다..
              <br />
              <br />
              최근 여러 사례들을 보면 내 개인정보가 나만의 정보가 아니게 되어
              버린 것 같습니다.
              <br />
              <br />
              만약 다른 서비스와 동일한 비밀번호로 서비스를 이용하시고
              있으시다면 변경해서 나의 정보를 지켜주세요!
            </BodyText>
          </Body>
        )}
        <Text>
          <Icon src={Richat} /> [주의] 계정과 비밀번호는 나만 알아야 하는 소중한
          정보입니다.
          <Button onClick={() => toggleTextVisibility(2)}>
            {showText2 ? (
              <IoIosArrowUp size={25} color="gray" />
            ) : (
              <IoIosArrowDown size={25} color="gray" />
            )}
          </Button>
        </Text>

        <Horizon width="350px" color="#EBEBEB" />
        {showText2 && (
          <Body show={showText2}>
            <BodyText>
              POPCON 사용자 여러분, 만우절에 센스업게 진지한 당부의 말씀을
              드리게 되었습니다..
              <br />
              <br />
              최근 여러 사례들을 보면 내 개인정보가 나만의 정보가 아니게 되어
              버린 것 같습니다.
              <br />
              <br />
              만약 다른 서비스와 동일한 비밀번호로 서비스를 이용하시고
              있으시다면 변경해서 나의 정보를 지켜주세요!
            </BodyText>
          </Body>
        )}
        <Text>
          <Icon src={Richat} />
          무더운 여름을 POPCON과 함께!!@@@
          <Button onClick={() => toggleTextVisibility(3)}>
            {showText3 ? (
              <IoIosArrowUp size={25} color="gray" />
            ) : (
              <IoIosArrowDown size={25} color="gray" />
            )}
          </Button>
        </Text>

        <Horizon width="350px" color="#EBEBEB" />
        {showText3 && (
          <Body show={showText3}>
            <BodyText>
              POPCON 사용자 여러분, 만우절에 센스업게 진지한 당부의 말씀을
              드리게 되었습니다..
              <br />
              <br />
              최근 여러 사례들을 보면 내 개인정보가 나만의 정보가 아니게 되어
              버린 것 같습니다.
              <br />
              <br />
              만약 다른 서비스와 동일한 비밀번호로 서비스를 이용하시고
              있으시다면 변경해서 나의 정보를 지켜주세요!
            </BodyText>
          </Body>
        )}
        <BOX>
          <Title>
            <Typo size="1.2rem" weight="400">
              도움말을 통해
              <br />
              <br />
              문제를 해결하지 못하셨나요?
            </Typo>
          </Title>
          <img alt="button" src={Button1} width="90%" />
          <Margin height="10" />
          <img alt="button" src={Button2} width="90%" />
          <Margin height="10" />
        </BOX>
      </Wrapper>
      <Margin height="70" />
      <NavigationBar />
    </>
  );
};

export default Service;
