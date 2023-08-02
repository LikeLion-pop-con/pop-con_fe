import React from "react";
import Cardup from "../../Components/Brand,AristCard/Cardup";
import Carddown1 from "../../Components/Brand,AristCard/Carddown1";
import Carddown2 from "../../Components/Brand,AristCard/Carddown2";
import Popinfodetail from "../../Components/Brand,AristCard/Popinfodetail";
const Test = () => {
  return (
    <div>
      <Cardup
        name="IAB STUDIO"
        backimageUrl="/img/Artistimg/iab_box.jpg"
        CircleimageUrl="/img/Artistimg/iablogo.png"
      ></Cardup>
      
      <Popinfodetail
        bodyText="• 운영 기간 : 2023.07.06(목) ~ 2023.07.12 (수)
                  • 운영 시간 : 행사 종료
                  • 기획/운영 : 아이앱 스튜디오, 더현대 서울
                  • 소개 : IAB STUDIO POP-UP STORE at ‘THE HYUNDAI SEOUL' 아이앱 스튜디오가 여의도에 위치한 ‘더현대 서울’에서 팝업 스토어를 진행합니다. 오프라인으로 열리는 이번 팝업 스토어에서는 새롭게 선보이는 의류들과 아이웨어 라인이 공개되며, 팝업 품목 리스트와 구매 방식에 관련된 정보는 추후 공개될 예정입니다.
                  • 키워드 : iabstudiopop-upstore, iabstudiopop-upstore, iabstudio, 아이앱스튜디오, 더현대서울, 아이앱스튜디오팝업,팝업, 팝업스토어, 더현대, 서울팝업, 서울가볼만한곳, 브랜드팝업, popup, popupstore
                  • 자료 출처 : 아이앱 스튜디오 인스타그램 공식 계정"
        ></Popinfodetail>
        <Cardup
        name="로제"
        backimageUrl="/img/Artistimg/iab_box.jpg"
        CircleimageUrl="/img/Artistimg/iablogo.png"
      ></Cardup>
      <Carddown1
        toptext="빈지노의 새로운 노비츠키 한정판 팝업 스토어"
        bodytext="10년 만에 세상으로 모습을 들어낸 빈지노가 낸 음반 노비츠키를 한정판으로 판매할 예정이다. 앨범 발매기념 팝업 스토어는 3일 간 운영되고 집계된 의결을 바탕으로 지역을 선택하여 열릴 예정이다."
      ></Carddown1>
      
    </div>
  );
};

export default Test;
