import React from 'react';
import Header from '../../Components/Header/Header';
import styled from 'styled-components';
import Typo from '../../assets/Typo';
import Horizon from '../../Components/Horizon/Horizon';
import { useNavigate,Link } from 'react-router-dom';
import NavigationBar from '../../Components/Navigate/Navigate';
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
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  margin-bottom: -85px;
`;

const Name = styled.p`
margin-left: 60px;

`;
const Detailbox = styled.div`
    width: 100%;
    height: 450px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const TextLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
`
const Text = styled.div`
   padding: 10px;
   padding-top:15px;
   padding-bottom:15px;
`
const Text1 = styled.div`
padding: 8px;
padding-top:30px;

`
const Mypage = () => {
    const navigate = useNavigate();
    return (
         <>
             <Header left="logo" right={["login", "search"]} />
             <Wrapper>
                 <Image src='/MyPage/Logo.png' />
                 <Name><Typo size="1.5rem" weight="400" color = "white">이상혁</Typo></Name>
             </Wrapper>
             <Detailbox>
                <TextLink ><Typo size="1.3rem" weight="400"><Text1>My POPCON</Text1></Typo>
                <Horizon width="340px" ></Horizon></TextLink>
                <TextLink to="/Mypage/Myreservation"><Text><Typo size="1rem" weight="400" >나의 예약</Typo></Text>
                <Horizon width="340px"color="lightgray"></Horizon></TextLink>
                <TextLink to="/Mypage/MypopLike"> <Text><Typo size="1rem" weight="400">관심 팝업</Typo></Text>
                <Horizon width="340px"color="lightgray"></Horizon></TextLink>
                <TextLink to="/Mypage/Mypoprequest"><Text><Typo size="1rem" weight="400">요청 팝업</Typo></Text>
                <Horizon width="340px"color="lightgray"></Horizon></TextLink>
                <TextLink to="/Mypage/MyBrandLike"><Text><Typo size="1rem" weight="400">구독 브랜드</Typo></Text>
                <Horizon width="340px"color="white"></Horizon></TextLink>
                <TextLink><Text1><Typo size="1.3rem" weight="400">ABOUT POPCON</Typo></Text1><Horizon width="340px"></Horizon></TextLink>
                <TextLink to="/Mypage/KnowList"><Text><Typo size="1rem" weight="400">공지사항</Typo></Text><Horizon width="340px"color="lightgray"></Horizon></TextLink>
                <TextLink to="/Mypage/introduce"><Text><Typo size="1rem" weight="400">회사소개</Typo></Text><Horizon width="340px"color="white"></Horizon></TextLink>
             </Detailbox>
             <NavigationBar/>
         </>
    );
};

export default Mypage;
