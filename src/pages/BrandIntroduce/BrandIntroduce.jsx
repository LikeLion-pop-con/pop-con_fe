import React from "react";
import styled from "styled-components";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown1 from "../../Components/Brand, ArtistCard/Carddown1";
import InfoTabs from "../../Components/PageTitle/InfoTabs";
import Header from "../../Components/Header/Header";
import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

const BrandIntroduce = () => {
  const { brandId } = useParams();

  return (
    <div>
      <Header left="logo" right={["login", "search"]} />
      <Cardup
        name="IAB STUDIO"
        backimageUrl="/img/Artistimg/iablogo.png" //이미지 크기가 안 맞아서
        CircleimageUrl="/img/Artistimg/iabCircleimg.png"
      ></Cardup>
      <Carddown1
        subcribeNum="452"
        popNum="23"
        introduceText="[I've Always Been], '항상 그래왔듯, 앞으로 변함없이'"
      ></Carddown1>
      <InfoTabs
        brandId={brandId} // cateId 변수명을 brandId로 수정
        page1="소개"
        page2="팝업 정보"
        page3="포스트"
      />
    </div>
  );
};

export default BrandIntroduce;
