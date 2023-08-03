import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown2 from "../../Components/Brand, ArtistCard/Carddown2";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const PopupinfoImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

const PopupButton = styled.button`
  width: 70%;
  height: 48px;
  background-color: #ec7538;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 15%;
`;

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const PopupInfo = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯
  const imagePathsFromBackend = [
    "이미지1의_경로.jpg",
    "이미지2의_경로.jpg",
    // 추가적인 이미지들의 경로
  ];
  return (
    <div>
      <Header left="logo" right={["login", "search"]} />
      <Cardup
        name="IAB STUDIO"
        backimageUrl="img/Artistimg/iab_box.jpg"
        CircleimageUrl="img/Artistimg/iabCircleimg.png"
      />
      <Carddown2
        toptext="빈지노의 새로운 노비츠키 한정판 팝업 스토어"
        bodytext="10년 만에 세상으로 모습을 들어낸 빈지노가 낸 음반 노비츠키를 한정판으로 판매할 예정이다. 앨범 발매기념 팝업 스토어는 3일 간 운영되고 집계된 의결을 바탕으로 지역을 선택하여 열릴 예정이다."
      />
      <Popinfodetail
        bodyText={
          "2023.07.06(목) ~ 2023.07.12 (수)\n행사 종료\n아이앱 스튜디오, 더현대 서울IAB STUDIO POP-UP STORE at ‘THE HYUNDAI SEOUL' 아이앱 스튜디오가 여의도에 위치한 ‘더현대 서울’에서 팝업 스토어를 진행합니다. 오프라인으로 열리는 이번 팝업 스토어에서는 새롭게 선보이는 의류들과 아이웨어 라인이 공개되며, 팝업 품목 리스트와 구매 방식에 관련된 정보는 추후 공개될 예정입니다.\niabstudiopop-upstore, iabstudiopop-upstore, iabstudio, 아이앱스튜디오, 더현대서울, 아이앱스튜디오팝업,팝업, 팝업스토어, 더현대, 서울팝업, 서울가볼만한곳, 브랜드팝업, popup, popupstore\n아이앱 스튜디오 인스타그램 공식 계정"
        }
      />
      <PopupinfoImg>{renderImages(imagePathsFromBackend)}</PopupinfoImg>
      <PopupButton type="submit">
        <Typo size="1.1rem" weight="600" color="white">
          팝업 요청 현황
        </Typo>
      </PopupButton>
      <Footer />
    </div>
  );
};

export default PopupInfo;
