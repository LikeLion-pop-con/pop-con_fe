import React from 'react';
import Header from '../../Components/Header/Header';
import NavigationBar from '../../Components/Navigate/Navigate';
import Typo from '../../assets/Typo';
import Horizon from '../../Components/Horizon/Horizon';
import Margin from '../../Components/Margin/Margin';
import styled from 'styled-components'
const Title = styled.div`
    margin: 5%;
`
const Title1 = styled.div`
  margin: 5%;
  display: flex;
  align-self: flex-start;
  margin-left: 50px;
  margin-bottom: 30px;
  
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

`
const Box = styled.div`
    margin: 40px;
    margin-left: 0px;
    width: 150px;
`
const Box1 = styled.div`
    margin: 40px;
    margin-left: -50px;
    margin-top: 34px;
    width: 250px;   
`
const MyInfo = () => {
    const userName = localStorage.getItem('Name');
    const userPhone = localStorage.getItem('Phone');
    const userGender = parseInt(localStorage.getItem('Gender'), 10) === 1 ? '여자' : '남자';
    const userAddress = localStorage.getItem('Address');
    const userType = parseInt(localStorage.getItem('UserType'), 10) === 1 ? '개인' : '기업';

    return (
        <>
          <Header left="logo" right={["login", "search"]} bgColor="#EC7538"/>
          <Title><Typo size="1.3rem" weight="400">내 정보</Typo></Title>
          <Horizon width="350px" ></Horizon>
          <Margin height='10'/>

          <Wrapper>
            <Box>
          <Title1><Typo size="1.3rem" weight="400" color = "gray">성명</Typo></Title1>
          <Title1><Typo size="1.3rem" weight="400" color = "gray">연락처</Typo></Title1>
          <Title1><Typo size="1.3rem" weight="400" color = "gray">성별</Typo></Title1>
          <Title1><Typo size="1.3rem" weight="400" color = "gray">회원종류</Typo></Title1>
          <Title1><Typo size="1.3rem" weight="400" color = "gray">주소</Typo></Title1>
          </Box>
          <Box1>
          <Title1><Typo size="1.3rem" weight="400" color = "black">{userName}</Typo></Title1>
          <Title1><Typo size="1.3rem" weight="400" color = "black">{userPhone}</Typo></Title1>
          <Title1><Typo size="1.3rem" weight="400" color = "black">{userGender}</Typo></Title1>
          <Title1><Typo size="1.3rem" weight="400" color = "black">{userType}</Typo></Title1>
          <Title1><Typo size="1.3rem" weight="400" color = "black">{userAddress}</Typo></Title1>
          </Box1>
          </Wrapper>
          <NavigationBar/>
        </>
    );
};

export default MyInfo;