import React from "react";
import Header from "../../Components/Header/Header";
import NavigationBar from "../../Components/Navigate/Navigate";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import Margin from "../../Components/Margin/Margin";
import styled from "styled-components";
const Title = styled.div`
  margin: 5%;
`;
const Title1 = styled.div`
  margin: 5%;
  display: flex;
  align-self: flex-start;
  margin-left: 50px;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin-left: 20%;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;
const Box = styled.div`
  margin-top: 10px;
`;
const Box1 = styled.div``;
const MyInfo = () => {
  const userName = localStorage.getItem("Name");
  const userPhone = localStorage.getItem("Phone");
  const userGender =
    parseInt(localStorage.getItem("Gender"), 10) === 1 ? "여자" : "남자";
  const userAddress = localStorage.getItem("Address");
  const userType =
    parseInt(localStorage.getItem("UserType"), 10) === 1 ? "개인" : "기업";

  return (
    <>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Title>
        <Typo size="1.3rem" weight="400">
          내 정보
        </Typo>
      </Title>
      <Horizon width="350px" />
      <Margin height="10" />

      <Margin height="40" />
      <Wrapper>
        <Box>
          <Title1>
            <Typo size="1.2rem" weight="400" color="gray">
              성명
            </Typo>
          </Title1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="gray">
              연락처
            </Typo>
          </Title1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="gray">
              성별
            </Typo>
          </Title1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="gray">
              회원종류
            </Typo>
          </Title1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="gray">
              주소
            </Typo>
          </Title1>
        </Box>
        <Box1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="black">
              {userName}
            </Typo>
          </Title1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="black">
              {userPhone}
            </Typo>
          </Title1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="black">
              {userGender}
            </Typo>
          </Title1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="black">
              {userType}
            </Typo>
          </Title1>
          <Title1>
            <Typo size="1.2rem" weight="400" color="black">
              {userAddress}
            </Typo>
          </Title1>
        </Box1>
      </Wrapper>
      <NavigationBar />
    </>
  );
};

export default MyInfo;
