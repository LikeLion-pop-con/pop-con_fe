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
  align-self: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
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
  width: 110%;
  height: 200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-self: center;
`;
const Icon = styled.img`
  margin-right: 10px;
`;
const Service = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);

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
      case 4:
        setShowText4((prevShowText) => !prevShowText);
        break;
      default:
        break;
    }
  };
  const handleButtonClick = () => {
    window.open("http://pf.kakao.com/_xlxixmxhG", "_blank");
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
          팝콘 스토어에서 무엇을 할 수 있나요?
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
            팝콘 스토어에서는 다양한 팝업 스토어, 브랜드, 아티스트의 팝업을 만나볼 수 있습니다.
            <br />
              <br />의류, 액세서리, 디자인 제품부터 독특한 아트워크까지 다양한 상품을 만나보세요.
            </BodyText>
          </Body>
        )}
        <Text>
          <Icon src={Richat} /> 팝업 스토어란 무엇인가요?
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
              팝업 스토어는 일정 기간 동안 한정된 기간 동안만 운영되는 임시 매장을 의미합니다. <br />
              <br />다양한 브랜드, 아티스트가 제품을 소개하고 판매하는 공간으로, 유니크하고 특별한 상품을 만나보실 수 있습니다.
            </BodyText>
          </Body>
        )}
         <Text>
          <Icon src={Richat} /> 팝업 스토어 방문 시 어떤 혜택이 있나요?
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
          <Body show={showText2}>
            <BodyText>
            팝업 스토어 방문자들은 주로 한정된 기간 동안만 구매할 수 있는 독특한 상품들을 만나보실 수 있습니다. <br />
              <br />또한 실제로 제작자나 브랜드와 대화하며 상품에 대한 이야기를 들을 수 있는 특별한 경험을 누릴 수 있습니다.
            </BodyText>
          </Body>
        )}
        <Text>
          <Icon src={Richat} />
          문의 사항이 있을 때 어떻게 문의하면 되나요?
          <Button onClick={() => toggleTextVisibility(4)}>
            {showText4 ? (
              <IoIosArrowUp size={25} color="gray" />
            ) : (
              <IoIosArrowDown size={25} color="gray" />
            )}
          </Button>
        </Text>

        <Horizon width="350px" color="#EBEBEB" />
        {showText4 && (
          <Body show={showText3}>
            <BodyText>
            문의하고 싶은 내용이 있을 경우, "고객센터" 페이지에서 문의하기를 누르거나 이메일을 통해 문의하실 수 있습니다. <br />
              <br />빠르고 정확한 답변을 드리기 위해 노력하겠습니다.
              <br />
              <br />
더 많은 궁금한 사항이나 질문이 있으시면 언제든 팝콘 스토어 고객센터로 문의해주세요!
              <br />
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
          <img
            alt="button"
            src={Button1}
            width="90%"
            onClick={handleButtonClick}
          />
          <Margin height="10" />
          <a href="tel:010-8869-2796">
            <img alt="button" src={Button2} width="100%" />
          </a>
          <Margin height="10" />
        </BOX>
      </Wrapper>
      <Margin height="70" />
      <NavigationBar />
    </>
  );
};

export default Service;
