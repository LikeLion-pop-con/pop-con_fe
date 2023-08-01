import React from 'react';
import Header from '../../Components/Header/Header';
import styled from 'styled-components'
import Typo from '../../assets/Typo';
import Horizon from '../../Components/Horizon/Horizon';

import LargeCard from '../../Components/Card/LargeCard';
import NavigationBar from '../../Components/Navigate/Navigate';
const Title = styled.div`
    margin: 5%;
`
const Wrapper = styled.div`
    margin: 20px;
`
const MypopLike = () => {
    return (
        <>
          <Header left="logo" right={["login", "search"]} />
          <Title><Typo size="1.3rem" weight="400">관심 팝업</Typo></Title>
          <Horizon width="350px" ></Horizon>
          <Wrapper>
          <LargeCard image='PopupCardimg1.png' title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G \n인하대학교'} date='2023.07.21~2023.08.19'/>
          <LargeCard image='NewJeans.jpg' title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G \n인하대학교'} date='2023.07.21~2023.08.19'/>
          <LargeCard image='NewJeans.jpg' title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G \n인하대학교'} date='2023.07.21~2023.08.19'/>
          </Wrapper>
          <NavigationBar/>
        </>
    );
};

export default MypopLike;