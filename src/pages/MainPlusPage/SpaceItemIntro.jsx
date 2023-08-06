import styled from "styled-components";
import Spacedetail from "../../Components/Brand, ArtistCard/Spacedetail";
import Margin from "../../Components/Margin/Margin";
import Kakaomap from "../../Components/Kakaomap/Kakaomap2";
import Typo from "../../assets/Typo";
import { motion } from "framer-motion";
import img1 from "../../assets/Icons/Card/PopupCardimg1.png";
import img2 from "../../assets/Icons/Card/PostCardimg1.png";
import img3 from "../../assets/Icons/Card/PostCardimg2.jpg";
import Footer from "../../Components/Footer/Footer";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  cursor: pointer;
`;
const RequestWrapper = styled(motion.div)`
  width: 100%;
  height: 400px;

  transform-origin: top center;
  display: flex;
  justify-content: center;
`;
const GetMaptext = styled.p`
  width: 50%;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
  opacity: 0.8;
  cursor: pointer;
`;
const SliderXwrapper2 = styled.div`
  position: relative;
  overflow-x: scroll;
  min-height: 330px;
  width: 100%;
  scroll-snap-type: x mandatory;
`;
const SliderXItems = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`;
const Img = styled.img`
  height: 300px;
  min-width: 370px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function SpaceItemIntro() {
  return (
    <Wrapper>
      <SliderXwrapper2>
        <SliderXItems>
          <Img src={img1}></Img>
          <Img src={img2}></Img>
          <Img src={img3}></Img>
        </SliderXItems>
      </SliderXwrapper2>
      <Margin height="30" />
      <Spacedetail
        bodyText={
          "압구성 사거리에 위치한 대형 건물로 가시성이 매우 좋고 접근성 또한 우수한 공간입니다. 또한 3호선 압구정역과 수인분당선 압구정 로데오역에서 도보 7분 거리에 위치합니다ㅣ.\n하이하이"
        }
      >
        hi
      </Spacedetail>
      <GetMaptext>팝업 요청 현황</GetMaptext>
      <Margin height="15" />

      <RequestWrapper>
        <Kakaomap />
      </RequestWrapper>
      <Margin height="20" />
      <PopupButton
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Typo size="1.1rem" weight="600" color="white">
          대여하기
        </Typo>
      </PopupButton>
      <Footer />
    </Wrapper>
  );
}
export default SpaceItemIntro;
