import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdSlider from "../../Components/AdSlider/AdSlider";
import Category from "../../Components/PopupCategory/PopupCategory";
import Margin from "../../Components/Margin/Margin";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import SliderX from "../../Components/ArtistCategory/ArtistCategory";
import SmallCard from "../../Components/Card/SmallCard";
import Horizon from "../../Components/Horizon/Horizon";
import PostCard from "../../Components/Card/PostCard";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const SliderXwrapper = styled.div`
  position: relative;
  overflow-x: scroll;
  min-height: 250px;
  width: 100%;
`;
const SliderXItems = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  /* display: grid;
  grid-template-columns: repeat(${(props) => props.cards}, 1fr);
  gap: 20px; */
`;

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Header left="logo" right={["login", "search"]} />
        <AdSlider />
        <Margin height="230" />
        <PopupTitle text="팝업 카테고리" bottomgap="30" />
        <Category />
        <Margin height="10" />
        <SliderXwrapper>
          <SliderXItems>
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="로제"
              category="이쁘다"
              main="진짜 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/iab_box.jpg"
              title="iab"
              category="이쁘다"
              main="너무 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="블랙핑크"
              category="진짜 이쁘네 ㅋㅋ"
              main="제 이상형이에요 사귀자"
            />
          </SliderXItems>
        </SliderXwrapper>
        <Margin height="30" />
        <PopupTitle text="예매 가능한 인기 팝업" bottomgap="15" />
        <SliderXwrapper>
          <SliderXItems>
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="로제"
              category="이쁘다"
              main="진짜 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/iab_box.jpg"
              title="iab"
              category="이쁘다"
              main="너무 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="블랙핑크"
              category="진짜 이쁘네 ㅋㅋ"
              main="제 이상형이에요 사귀자"
            />
          </SliderXItems>
        </SliderXwrapper>
        <Margin height="50" />
        <PopupTitle text="팝업 포스트" bottomgap="10" />
        <PostCard
          image={"img/Artistimg/iab_box.jpg"}
          title="슬릭의 Super Shy 팝업공연 현장!!"
          type="추천 포스트"
          main="요즘 가장 핫한 뉴진스의 Super shy을 슬릭님만의 스타일로 리믹스한 음원을 팝업스테이지에서 최초 공개하였습니다."
        />
        <Margin height="60" />
        <PopupTitle text="새로운 팝업 브랜드를 만나보세요!" bottomgap="30" />
        <SliderXwrapper>
          <SliderXItems>
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="로제"
              category="이쁘다"
              main="진짜 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/iab_box.jpg"
              title="iab"
              category="이쁘다"
              main="너무 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="블랙핑크"
              category="진짜 이쁘네 ㅋㅋ"
              main="제 이상형이에요 사귀자"
            />
          </SliderXItems>
        </SliderXwrapper>
        <Margin height="35" />
        <PopupTitle text="독립 아티스트" />
      </Wrapper>
    </>
  );
}

export default Main;
