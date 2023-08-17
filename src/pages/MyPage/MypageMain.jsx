import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import { useNavigate, Link } from "react-router-dom";
import NavigationBar from "../../Components/Navigate/Navigate";
import Margin from "../../Components/Margin/Margin";
const Wrapper = styled.div`
  background-color: #ec7538;
  height: 260px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  padding-bottom: 110px;
  margin-bottom: 30px;
`;
const Container = styled.div`
  position: relative;
  margin-bottom: -85px;
  top: 70px;
`;
const Image = styled.img`
  width: 200px;
  height: 150px;
  margin-left: 30%;
`;

const Name = styled.p`
  position: absolute;
  top: 64px;
  left: 130px;
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
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: 250px; /* 원하는 여백 조정 */
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
                로그인 <br />
                필요!
              </Typo>
            )}
          </Name>
        </Container>
        <ButtonsWrapper>
          {isLoggedIn && (
            <MyINFO onClick={() => navigate("/Mypage/Myinfo")}>내 정보</MyINFO>
          )}
          {isLoggedIn && (
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          )}
        </ButtonsWrapper>
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
        {(localStorage.getItem("UserType")==="2")&&(<TextLink to="/Mypage/Myplacereservation">
          <Text>
            <Typo size="1rem" weight="400">
              나의 공간 예약
            </Typo>
          </Text>
          <Horizon width="340px" color="lightgray"></Horizon>
        </TextLink>)}
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
          <Horizon width="340px" color="lightgray"></Horizon>
        </TextLink>
        <TextLink to="/Mypage/MyArtistLike">
          <Text>
            <Typo size="1rem" weight="400">
              구독 아티스트
            </Typo>
          </Text>
          <Horizon width="340px" color="lightgray"></Horizon>
        </TextLink>
        <TextLink to="/Password">
          <Text>
            <Typo size="1rem" weight="400">
              나의 결제수단
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
      <Margin height="200" />
      <NavigationBar />
    </>
  );
};

export default Mypage;
