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
import Main from "../MainPage/Main";
import { MdOutlineElevator } from "react-icons/md";
import { AiOutlineFullscreen } from "react-icons/ai";

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
  transform-origin: top center;
  display: flex;
  justify-content: center;
`;
const Space = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  padding-left: 20%;
`;
const Size = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  padding-left: 20%;
`;
const GetMaptext = styled.p`
  width: 50%;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
  opacity: 0.8;
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
  width: 370px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const BodyText = styled.p`
  width: 90%;
  margin: 0 5%;
  line-height: 1.6;
`;
const SpaceText = styled.p`
  width: 90%;
`;
const Limits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 20px;
  margin-top: 30px;
`;
const Limit = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  height: 40px;
  border-radius: 20px;
  align-items: center;
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

      <BodyText>
        <Typo fontType="large">공간 소개</Typo>
        <Margin height="20" />
        <Space>
          <MdOutlineElevator style={{ fontSize: 50 }} />
          <Typo style={{ marginLeft: 10 }} size="18px">
            건물층: 지하 4층 ~ 지하 5층
          </Typo>
        </Space>
        <Size>
          <AiOutlineFullscreen style={{ fontSize: 50 }} />
          <Typo style={{ marginLeft: 10 }} size="18px">
            연면적: 8802 m2
          </Typo>
        </Size>
        <Margin height="10" />
        <Typo style={{ lineHeight: 1.2 }} size="1rem" weight="400">
          압구성 사거리에 위치한 대형 건물로 가시성이 매우 좋고 접근성 또한
          우수한 공간입니다. 또한 3호선 압구정역과 수인분당선 압구정
          로데오역에서 도보 7분 거리에 위치합니다. 하이하이
        </Typo>
      </BodyText>
      <Margin height="20" />
      <Spacedetail
        bodyText={
          "압구성 사거리에 위치한 대형 건물로 가시성이 매우 좋고 접근성 또한 우수한 공간입니다.\n 또한 3호선 압구정역과 수인분당선 압구정 로데오역에서 도보 7분 거리에 위치합니다ㅣ.\n하이하이"
        }
      >
        hi
      </Spacedetail>
      <Margin height="30" />
      <BodyText>
        <Typo fontType="large">제약 사항</Typo>
        <Limits>
          <Limit>
            <Typo>전기 사용</Typo>
            <Typo style={{ paddingLeft: 20, color: "#0054D1" }}>가능</Typo>
          </Limit>
          <Limit>
            <Typo>창고 사용</Typo>
            <Typo style={{ paddingLeft: 20, color: "#0054D1" }}>가능</Typo>
          </Limit>
          <Limit>
            <Typo>화물 E/V</Typo>
            <Typo style={{ paddingLeft: 20, color: "#0054D1" }}>가능</Typo>
          </Limit>
          <Limit>
            <Typo>주차 지원</Typo>
            <Typo style={{ paddingLeft: 20, color: "#0054D1" }}>가능</Typo>
          </Limit>
        </Limits>
      </BodyText>
      <Margin height="30" />

      <SpaceText>
        <Typo fontType="large">공간 위치</Typo>
      </SpaceText>
      <GetMaptext>지도 보기</GetMaptext>
      <Margin height="15" />
      <RequestWrapper>
        <Kakaomap />
      </RequestWrapper>
      <Margin height="40" />
      <PopupButton
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Typo size="1.1rem" weight="600" color="white">
          대여하기
        </Typo>
      </PopupButton>
      <Margin height="40" />
      <Footer />
    </Wrapper>
  );
}
export default SpaceItemIntro;
