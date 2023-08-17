import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Icons/Header/logo.png";
import Button from "../../assets/Icons/Card/Button.svg";
import Typo from "../../assets/Typo";
import { motion } from "framer-motion";
import KakaoShare from "../../Components/Kakao/KakaoShare";

const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`; // page에서 사용

const CardEach = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;

  width: 300px;
  border: 0.5px solid lightgray;

  border-radius: 16px;
  cursor: pointer;
  margin: 15px;
  box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
  scroll-snap-align: center;
`;
const Thumbnail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //background-image: url('/Cardrose.jpg');
    background-image: url(' ${(props) => props.image} ');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: none;
    border-radius: 16px;
    //margin-bottom: 15px;

    height: 300px;
    width: 100%;
    
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-bottom: 5px;
  margin-left: 25px;
  line-height: 25px;
  width: 80%;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px;
  p {
    line-height: 1.2;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;
const UnderWapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다
`;

const PopupCard = ({ isSpace, bf, f, image, title, main, onClick, date }) => {
  const navigate = useNavigate();
  const [isshare, setIsshare] = useState(false);

  console.log(bf, f);

  return (
    <CardEach onClick={onClick}>
      <Thumbnail image={image} />
      <TextBox>
        <TitleWrapper>
          <Typo>{title}</Typo>
        </TitleWrapper>
        <TextWrapper>
          {isSpace && (
            <>
              <Typo weight="300" size="0.9rem" lineheight="18px">
                {main}
                예약 날짜 : &nbsp;&nbsp;{date}
              </Typo>
              <Typo weight="300" size="0.9rem" lineheight="18px">
                {main}
                예약 층수 : &nbsp;&nbsp;{bf ? "지하 " + bf + "~" : ""}
                {"지상 " + f}
              </Typo>
            </>
          )}
        </TextWrapper>
      </TextBox>
      <UnderWapper>
        <Icon
          src={logo}
          width="10%"
          height="10%"
          alt="logo"
          onClick={() => navigate("/Adminmain")}
        />
        <Typo fontType="medium" onClick={() => navigate("/Adminmain")}>
          {" "}
          확인
        </Typo>
        <Icon src={Button} alt="Button" onClick={() => setIsshare(true)} />
        {isshare && (
          <KakaoShare
            title={title}
            info={
              isSpace
                ? `예약 날짜 :   ${date}\n예약 층수 :   ${
                    bf ? "지하" + bf + "~" : ""
                  }${"지상 " + f}`
                : ""
            }
            image={image}
          />
        )}
      </UnderWapper>
    </CardEach>
  );
};

export default PopupCard;
