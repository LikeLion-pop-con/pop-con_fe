import React from "react";
import { styled } from "styled-components";
import Typo from "../../assets/Typo";
import { TbPointFilled } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { useState } from "react";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FirstBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const SecondBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const SubcribeNum = styled.div``;
const SubcribeText = styled.div``;
const PopNum = styled.div``;
const PopText = styled.div``;
const IconContainer = styled.div`
  margin: 3px;
`;
const IntroduceText = styled.div`
  width: 300px;
  margin: 20px;
  text-align: center;
  line-height: 1.3;
`;
const Button1 = styled.button`
  width: 80px;
  height: 45px;
  border: 1px solid lightgray;
  border-radius: 30px;
  padding: 15px;
  background-color: ${(props) =>
    props.subscribed ? "#B2A5FE" : "transparent"};
  color: ${(props) => (props.subscribed ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button2 = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid lightgray;
  border-radius: 50%;
  padding: 8px;
  background-color: transparent;
`;
const Carddown1 = ({ subcribeNum, popNum, introduceText, subscribed, onSubscribe }) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribed);

  const handleSubscribe = () => {
    const newIsSubscribed = !isSubscribed;
    setIsSubscribed(newIsSubscribed);
    onSubscribe(newIsSubscribed);
  };
  return (
    <>
      <Wrapper>
        <FirstBox>
          <SubcribeNum>
            <Typo size="1.1rem" weight="400" color="main">
              {subcribeNum}
            </Typo>
          </SubcribeNum>
          <SubcribeText>
            <Typo size="1.1rem" weight="400">
              구독
            </Typo>
          </SubcribeText>
          <IconContainer>
            <TbPointFilled />
          </IconContainer>
          <PopNum>
            <Typo size="1.1rem" weight="400" color="main">
              {popNum}
            </Typo>
          </PopNum>
          <PopText>
            <Typo size="1.1rem" weight="400">
              회 좋아요
            </Typo>
          </PopText>
        </FirstBox>
        <IntroduceText>
          <Typo size="1rem" weight="200">
            {introduceText}
          </Typo>
        </IntroduceText>
        <SecondBox>
        <Button1 onClick={handleSubscribe} subscribed={subscribed}>
            {subscribed ? "구독 중" : "+ 구독"}
          </Button1>
          <Button2>
            <BsFillShareFill />
          </Button2>
        </SecondBox>
      </Wrapper>
    </>
  );
};

export default Carddown1;
