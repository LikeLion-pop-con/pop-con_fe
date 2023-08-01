import styled from "styled-components";
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Typo from "../../assets/Typo";
import Card from "../../Components/Card/Card";
import LargeCard from "../../Components/Card/LargeCard";
import SmallCard from "../../Components/Card/SmallCard";
import PostCard from "../../Components/Card/PostCard";
import PopupCard from "../../Components/Card/PopupCard";

import Cardrose from "../../assets/Icons/Card/Cardrose.jpg";
import SmallCardGH from "../../assets/Icons/Card/SmallCardGH.jpg";
import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";
import PostCardimg1 from "../../assets/Icons/Card/PostCardimg1.png";
import PopupCardimg1 from "../../assets/Icons/Card/PopupCardimg1.png";




const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-items: center;
`;

const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`   



const CardTest = () => {
  const navigate = useNavigate();
  return (
    <>

      <Typo size= "2rem" weight= "bold" > Hi my name is jo </Typo>
      <Typo>글꼴이 어떻게 나올까</Typo>
      <Typo color= 'green'>모든 인류 구성원의</Typo>
      <CardBlock>
        <Card image= {Cardrose} title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
        <Card image= {Cardrose} title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
        <Card image= {Cardrose} title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
        <Card image= {Cardrose} title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
        
        <SmallCard image={SmallCardGH} title='심금이가 좋다.' category='캐릭터 전시팝업' main={'체고다 멋지다. \n우리 심금이🫶🏻'}/>
        <SmallCard image={SmallCardGH} title='심금이가 좋다.' category='캐릭터 전시팝업' main={'체고다 멋지다. \n우리 심금이🫶🏻'}/>
        <LargeCard image={NewJeans} title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G \n인하대학교'} date='2023.07.21~2023.08.19'/>
        <LargeCard image={NewJeans} title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G '} date='2023.07.21~2023.08.19'/>

        <PostCard image={PostCardimg1} type={'추천 포스트'} title={'슬릭의 Supershy프랑스 밤잼 크렘드 마롱 \n 팝업 스토어 현장'} color='green' main={'크렘드마롱(Crème de Marrons)은 클레망포지에사의 140년 전통 프랑스산 밤잼 브랜드 입니다.\n크렘드마롱은 프랑스 남부 리옹 지역에서 수확하는\n야생밤을 원료로 깊은 밤의 풍미를 선사합니다.'} />
        
        <PopupCard image={PopupCardimg1} title='IAB studio 팝업 요청되었습니다!' main={'팝업 장소와 일정이 확정되면 알려드릴게요.\n이 팝업 정보를 공유해보세요!'}/>

       
      </CardBlock>
    </>
  );
};

export default CardTest;
//크렘드마롱(Crème de Marrons)은 클레망포지에사의<br/>140년 전통 프랑스산 밤잼 브랜드 입니다.<br/>크렘드마롱은 프랑스 남부 리옹 지역에서 수확하는<br/>야생밤을 원료로 깊은 밤의 풍미를 선사합니다.</Typo>
//<PopupCard/>
//
