import React from "react";
import Header from "../../Components/Header/Header";
import Cardup from "../../Components/Brand,AristCard/Cardup";
import Carddown1 from "../../Components/Brand,AristCard/Carddown1";
import PageTabs from "../../Components/PageTitle/PageTabs";

const PopupInfo = () => {
    return (
    <div>
        <Header/>
        <Cardup
        name="IAB STUDIO"
        backimageUrl="/img/Artistimg/Backrose.png"
        CircleimageUrl="/img/Artistimg/rose.jpg"
        ></Cardup>
        <Carddown1
        subcribeNum="452"
        popNum="23"
        introduceText="  뉴질랜드 국적을 가진 최초의 K-POP 아이돌로써 화제가 됨과 동시에 박봄을 잇는 차세대 YG 걸그룹 음색깡패"
        ></Carddown1>
        <PageTabs color='black' page1='qmf' page2='sdf' page3='sdf'/>
    </div>
  );
};

export default PopupInfo ;