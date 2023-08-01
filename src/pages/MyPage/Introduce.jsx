import React ,{useState} from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../../Components/Horizon/Horizon";
import NavigationBar from "../../Components/Navigate/Navigate";
import Logo from "../../assets/Icons/Header/logo.png";
import Infor from "../../assets/Icons/Infor/Group 472.svg";
const Title = styled.div`
  margin: 5%;
`;
const Icon = styled.img`
  width: 50%;
`;
const Icon2 = styled.img`
  margin: 20px;
`;
const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  width: 73%;
  box-shadow: 0px 10px 24px rgba(99, 99, 99, 0.15);
  border-radius: 20px;
  padding: 15px;
  margin: 25px;
  label {
    color: #ec7538;
  }
`;
const Text = styled.p`
  line-height: 30px;
`;
const Introduce = () => {

  return (
    <>
      <Header left="logo" right={["login", "search"]} bgColor="#EC7538" />
      <Title>
        <Typo size="1.3rem" weight="400">
          POPCON ?{" "}
        </Typo>
      </Title>
      <Horizon width="350px"></Horizon>
      <Wrapper>
        <Icon src={Logo}></Icon>
        <Box>
          <Typo size="1.1rem" weight="400">
            <Text>
              POPCON은 <label>팝업소셜 플랫폼 </label>입니다.
              <br />
              온라인을 통하지 않으면 구매하기 힘든, 경험하기 힘든 것들을 팝업의
              형태로 오프라인을 통해 구현해 <label>모두</label>에게 기회를
              부여하고자 구성하였습니다.
            </Text>
          </Typo>
        </Box>
        <Horizon width="350px" color="#EBEBEB"></Horizon>
        <Icon2 src={Infor}></Icon2>
        <Horizon width="350px" color="#EBEBEB"></Horizon>
        <Box>
          <Typo size="1.1rem" weight="400">
            <Text>
              POPCON은 서로<label>상호관계 </label>입니다.
              <br />
              <label>이용자</label>는 아카이브된 펀딩을 확인하고 펀딩을 선택하면
              됩니다. 이 선택한 수요에 맞추어 <label>브랜드</label>와{" "}
              <label>아티스트</label>는 의논을해 공간을 조정합니다. 저희는
              이러한 서비스를 보다 편리하게 이용자에게 제공하고자 노력하고
              있습니다.
            </Text>
          </Typo>
        </Box>
      </Wrapper>
      <NavigationBar />
    </>
  );
};

export default Introduce;
