import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import styled, { css, keyframes } from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import logo from "../../assets/Icons/Header/logo.png";
import NavigationBar from "../../Components/Navigate/Navigate";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Title = styled.div`
  margin: 5%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const Text = styled.p`
  margin: 5%;
  width: 80%;
  display: flex;
  flex-direction: row;
  line-height: 1.2;
  position: relative;
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
  position: absolute;
  right: -40px;
  top: 0;
  bottom: 0;
  margin: auto 0;
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

const KnowList = () => {
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
          공지사항
        </Typo>
      </Title>
      <Horizon width="350px" />
      <Wrapper>
        <Text>
          [공지사항] 서비스 업데이트 안내
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
              안녕하세요, 팝콘 스토어 사용자 여러분!
              <br />
              <br />
              저희 팝콘 스토어 팀에서는 지속적인 서비스 개선을 위해 노력하고
              있습니다. 새로운 업데이트 내용을 안내드립니다.
              <br />
              <br />
              1. 신규 기능 추가
              <br />
              <br />
              새로운 검색 기능으로 원하는 팝업 스토어, 브랜드, 아티스트를 더
              쉽게 찾아보세요. 팝업 스토어에서는 좋아요를 누르고 구독할 수 있는
              기능을 추가했습니다.
              <br />
              <br />
              2. UI/UX 개선
              <br />
              <br />
              사용자 경험을 개선하기 위해 일부 화면의 레이아웃과 디자인을
              개선했습니다. 더욱 직관적이고 사용하기 편리한 인터페이스를
              제공합니다.
              <br />
              <br />
              이번 업데이트로 더 나은 서비스를 제공하기 위해 최선을
              다하겠습니다. 여러분의 의견을 기다립니다. 감사합니다. 불편한
              사항이나 문의 사항이 있으시면 언제든지 고객센터로 연락주세요.
              <br />
              감사합니다.
              <br />
              <br />
              팝콘 스토어 팀 드림
            </BodyText>
          </Body>
        )}
        <Text>
          [주의] 계정과 비밀번호는 나만 알아야 하는 소중한 정보입니다.
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
          [공지사항] 무더운 여름을 POPCON과 함께!!
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
          <Body show={showText1}>
            <BodyText>
              안녕하세요, 팝콘 스토어 사용자 여러분!
              <br />
              <br />
              이번 여름, 더욱 더 즐겁고 시원한 시간을 보내기 위해 POPCON이
              여러분을 기다리고 있습니다!
              <br />
              <br />
              1. 새로운 여름 팝업 스토어 오픈!
              <br />
              <br />
              뜨거운 여름을 시원하게 만들어 줄 다양한 팝업 스토어가 오픈합니다.
              시원한 아이스크림부터 특별한 할인 이벤트까지, 여름을 즐길 준비가
              되셨나요?
              <br />
              <br />
              2. 팝콘 스토어와 함께하는 여름 이벤트
              <br />
              <br />
              팝콘 스토어에서만 만날 수 있는 특별한 여름 이벤트를 준비했습니다.
              다양한 혜택과 선물을 놓치지 마세요!
              <br />
              <br />
              3. 시원한 아티스트와 브랜드 소개
              <br />
              <br />
              더욱 다채로운 아티스트와 브랜드를 소개합니다. 팝콘 스토어에서만
              만날 수 있는 독특한 아이템과 작품을 확인해보세요. 더욱 시원한
              여름을 POPCON과 함께 즐겨보세요! 여러분의 즐거운 여름을
              응원합니다.
              <br />
              <br />
              더 많은 정보와 이벤트 내용은 팝콘 스토어 앱에서 확인하실 수
              있습니다. 언제나 여러분을 위해 노력하는 팝콘 스토어가 되겠습니다.
              <br />
              <br />
              팝콘 스토어 팀 드림
            </BodyText>
          </Body>
        )}
      </Wrapper>
      <NavigationBar />
    </>
  );
};

export default KnowList;
