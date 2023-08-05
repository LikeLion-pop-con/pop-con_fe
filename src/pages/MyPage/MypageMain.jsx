import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import { useNavigate, Link } from "react-router-dom";
import NavigationBar from "../../Components/Navigate/Navigate";
const Wrapper = styled.div`
  background-color: #ec7538;
  height: 260px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  padding-bottom: 110px;
  margin-bottom: 30px;
`;
const Container = styled.div`
  position: relative;
  margin-bottom: -85px;
`;
const Image = styled.img`
  width: 200px;
  height: 150px;
`;

const Name = styled.p`
  position: absolute;
  top: 70px;
  left: 60px;
`;
const Detailbox = styled.div`
  width: 100%;
  height: 450px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const Text = styled.div`
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const Text1 = styled.div`
  padding: 8px;
  padding-top: 30px;
`;
const LogoutButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  display: flex;
  align-self: flex-end;
  cursor: pointer;
  position: absolute;
  top: 260px;
  right: 10px;
`;
const MyINFO = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  display: flex;
  align-self: flex-end;
  cursor: pointer;
  position: absolute;
  top: 260px;
  right: 80px;
`;
const Mypage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Name");
    localStorage.removeItem("Phone");
    localStorage.removeItem("Gender");
    localStorage.removeItem("Address");
    localStorage.removeItem("UserType");
    navigate("/");
  };
  const isLoggedIn = !!localStorage.getItem("Token");
  const userName = localStorage.getItem("Name");
  return (
    <>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Wrapper>
        <Container>
          <Image src="/MyPage/Logo.png" />
          <Name>
            {" "}
            {isLoggedIn ? (
              <Typo size="1.5rem" weight="400" color="white">
                {userName}
              </Typo>
            ) : (
              <Typo size="1rem" weight="400" color="white">
                로그인 필요!
              </Typo>
            )}
          </Name>
        </Container>
        {isLoggedIn && (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        )}
        {isLoggedIn && (
          <MyINFO onClick={() => navigate("/Mypage/Myinfo")}>내 정보</MyINFO>
        )}
      </Wrapper>
      <Detailbox>
        <TextLink>
          <Typo size="1.3rem" weight="400">
            <Text1>My POPCON</Text1>
          </Typo>
          <Horizon width="340px"></Horizon>
        </TextLink>
        <TextLink to="/Mypage/Myreservation">
          <Text>
            <Typo size="1rem" weight="400">
              나의 예약
            </Typo>
          </Text>
          <Horizon width="340px" color="lightgray"></Horizon>
        </TextLink>
        <TextLink to="/Mypage/MypopLike">
          {" "}
          <Text>
            <Typo size="1rem" weight="400">
              관심 팝업
            </Typo>
          </Text>
          <Horizon width="340px" color="lightgray"></Horizon>
        </TextLink>
        <TextLink to="/Mypage/Mypoprequest">
          <Text>
            <Typo size="1rem" weight="400">
              요청 팝업
            </Typo>
          </Text>
          <Horizon width="340px" color="lightgray"></Horizon>
        </TextLink>
        <TextLink to="/Mypage/MyBrandLike">
          <Text>
            <Typo size="1rem" weight="400">
              구독 브랜드
            </Typo>
          </Text>
          <Horizon width="340px" color="white"></Horizon>
        </TextLink>
        <TextLink>
          <Text1>
            <Typo size="1.3rem" weight="400">
              ABOUT POPCON
            </Typo>
          </Text1>
          <Horizon width="340px"></Horizon>
        </TextLink>
        <TextLink to="/Mypage/KnowList">
          <Text>
            <Typo size="1rem" weight="400">
              공지사항
            </Typo>
          </Text>
          <Horizon width="340px" color="lightgray"></Horizon>
        </TextLink>
        <TextLink to="/Mypage/introduce">
          <Text>
            <Typo size="1rem" weight="400">
              회사소개
            </Typo>
          </Text>
          <Horizon width="340px" color="lightgray"></Horizon>
        </TextLink>
        <TextLink to="/Mypage/Service">
          <Text>
            <Typo size="1rem" weight="400">
              고객센터
            </Typo>
          </Text>
          <Horizon width="340px" color="white"></Horizon>
        </TextLink>
      </Detailbox>
      <NavigationBar />
    </>
  );
};

export default Mypage;
