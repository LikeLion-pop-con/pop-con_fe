import React from "react";
import Cardup from "../../Components/Brand,AristCard/Cardup";
import Carddown1 from "../../Components/Brand,AristCard/Carddown1";
import Carddown2 from "../../Components/Brand,AristCard/Carddown2";
import PageTabs from "../../Components/PageTitle/PageTabs";
const BrandIntroduce = () => {
  return (
    <div>
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
      <PageTabs color='black' page1='qmf' page2='sdf' page3='sdf'/>
    </div>
  )
};

export default BrandIntroduce;