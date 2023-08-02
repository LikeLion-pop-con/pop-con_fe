import React from "react";
import styled from "styled-components";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown1 from "../../Components/Brand, ArtistCard/Carddown1";
import InfoTabs from "../../Components/PageTitle/InfoTabs";
import Header from "../../Components/Header/Header";
import Headerline from "../../Components/Headerline/Headerline";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PopupCategory } from "../../atom";

const ArtistIntroduce = () => {

  const { brandId } = useParams();

  return (
    <div>
      <Header left="logo" right={["login", "search"]} />
      <Cardup
        name="로제"
        backimageUrl="/img/Artistimg/Backrose.png" //이미지 크기가 안 맞아서 
        CircleimageUrl="/img/Artistimg/rose.jpg"
      ></Cardup>
      <Carddown1
        subcribeNum="452"
        popNum="23"
        introduceText="뉴질랜드 국적을 가진 최초의 K-POP 아이돌로써 화제가 됨과 동시에 박봄을 잇는 차세대 YG 걸그룹 음색깡패"
      ></Carddown1>
      <InfoTabs
        artistId={brandId} // cateId 변수명을 brandId로 수정
        page1="소개"
        page2="팝업 정보"
        page3="포스트"
        page1link={"brand/:brandId"}
        page2link={"brand/:brandId"}
        page3link={"brand/:brandId"}
        />
      <Headerline title="아티스트 제목" subtitle="아티스트 부제목" content="아티스트 본문"/>
    </div>
  );
};

export default ArtistIntroduce;
