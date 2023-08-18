import React from "react";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Margin from "../Margin/Margin";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Imgbox = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.backimageUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* 백그라운 이미지를 50px 위로 조정, 다른 이미지 넣으면 깨질까요?*/
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-image: url(${(props) => props.CircleimageUrl});
  background-position: center;
  background-size: 100% 100%;
  background-color: white;
  margin-top: -30px;
  box-shadow: 0 0 0 4px white;
`;
const Name = styled.p`
  margin: 20px;
  margin-top: -20px;
`;
const Cardup = ({ name, backimageUrl, CircleimageUrl, isSpace }) => {
  return (
    <>
      <Wrapper>
        <Imgbox backimageUrl={backimageUrl}></Imgbox>
        {isSpace ? (
          <Margin height="40" />
        ) : (
          <Circle CircleimageUrl={CircleimageUrl} isSpace={isSpace}></Circle>
        )}
        <Margin height="20" />
        <Typo size="1.5rem" weight="600">
          <Name>{name}</Name>
        </Typo>
      </Wrapper>
    </>
  );
};

export default Cardup;
