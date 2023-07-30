import React from "react";
import Cardup from "../../Components/Brand,AristCard/Cardup";
import Carddown1 from "../../Components/Brand,AristCard/Carddown1";
import Carddown2 from "../../Components/Brand,AristCard/Carrddown2";
import Popinfodetail from "../../Components/Brand,AristCard/Popinfodetail";
const Test = () => {
  return (
    <div>
     
      <Cardup
        name="IAB STUDIO"
        backimageUrl="/img/Artistimg/iab_box.jpg"
        CircleimageUrl="/img/Artistimg/iablogo.png"
      ></Cardup>
      <Carddown2
        toptext="빈지노의 새로운 노비츠키 한정판 팝업 스토어"
        bodytext="10년 만에 세상으로 모습을 들어낸 빈지노가 낸 음반 노비츠키를 한정판으로 판매할 예정이다. 앨범 발매기념 팝업 스토어는 3일 간 운영되고 집계된 의결을 바탕으로 지역을 선택하여 열릴 예정이다."
      ></Carddown2>
      <Popinfodetail></Popinfodetail>
    </div>
  );
};

export default Test;
