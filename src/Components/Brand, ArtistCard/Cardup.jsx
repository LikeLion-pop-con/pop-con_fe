import React from "react";
import styled from "styled-components";
import Typo from "../../assets/Typo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Imgbox = styled.div`
  min-width: 450px;
  height: 202px;
  background-image: url(${(props) => props.backimageUrl});
  background-size: cover;
  background-position: center top -50px; /* 백그라운 이미지를 50px 위로 조정, 다른 이미지 넣으면 깨질까요?*/
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-image: url(${(props) => props.CircleimageUrl});
  background-size: cover;
  background-position: center;
  margin-top: -50px;
  box-shadow: 0 0 0 4px white;
`;
const Name = styled.p`
  margin: 20px;
`;
const Cardup = ({ name,backimageUrl ,CircleimageUrl}) => {
  return (
    <>
      <Wrapper>
        <Imgbox backimageUrl = {backimageUrl}></Imgbox>
        <Circle CircleimageUrl = {CircleimageUrl}></Circle>
        <Typo size="1.5rem" weight="600">
          <Name>{ name }</Name>
        </Typo>
      </Wrapper>
    </>
  );
};

export default Cardup;
