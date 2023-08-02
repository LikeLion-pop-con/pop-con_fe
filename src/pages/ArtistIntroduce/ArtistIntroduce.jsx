import React from "react";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown1 from "../../Components/Brand, ArtistCard/Carddown1";
import Carddown2 from "../../Components/Brand, ArtistCard/Carddown2";
import PageTabs from "../../Components/PageTitle/PageTabs";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import InfoTabs from "../../Components/PageTitle/InfoTabs";

const BrandIntroduce = () => {

  const { brandId } = useParams();

  return (
    <div>
      <Header left="logo" right={["login", "search"]} />
      <Cardup
        name="로제"
        backimageUrl="/img/Artistimg/Backrose.png"
        CircleimageUrl="/img/Artistimg/rose.jpg"
      ></Cardup>
      <Carddown1
        subcribeNum="452"
        popNum="23"
        introduceText="  뉴질랜드 국적을 가진 최초의 K-POP 아이돌로써 화제가 됨과 동시에 박봄을 잇는 차세대 YG 걸그룹 음색깡패"
      ></Carddown1>
      <InfoTabs
        brandId={brandId} // cateId 변수명을 brandId로 수정
        page1="소개"
        page2="팝업 정보"
        page3="포스트"
        page1link={""}
        page2link={""}
        page3link={""}
        />
    </div>
  )
};

export default BrandIntroduce;