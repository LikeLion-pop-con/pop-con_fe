import React from 'react';
import Header from '../../Components/Header/Header';
import styled from 'styled-components'
import Typo from '../../assets/Typo';
import Horizon from '../../Components/Horizon/Horizon';
import Card from '../../Components/Card/Card';
import NavigationBar from '../../Components/Navigate/Navigate';
import Margin from '../../Components/Margin/Margin';

const Title = styled.div`
    margin: 5%;
`
const Wrapper = styled.div`
    margin: 20px;
`
const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`   

const MyBrandLike = () => {
    return (
        <>
          <Header left="logo" right={["login", "search"]} bgColor="#EC7538"/>
          <Title><Typo size="1.3rem" weight="400">구독 브랜드</Typo></Title>
          <Horizon width="350px" ></Horizon>
          <Margin height='20'/>

            <CardBlock>
          <Card image= "/Card/Cardrose.jpg" title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
          <Card image= "/Card/Cardrose.jpg" title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
          <Card image= "/Card/Cardrose.jpg" title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
          <Card image= "/Card/Cardrose.jpg" title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>        
            </CardBlock>
          <NavigationBar/>
        </>
    );
};

export default MyBrandLike;