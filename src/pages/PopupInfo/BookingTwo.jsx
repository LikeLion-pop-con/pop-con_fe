import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Kakaomap from "../../Components/Kakao/Kakaomap";
import Margin from "../../Components/Margin/Margin";
import * as api from "../../api";
import NavigationBar from "../../Components/Navigate/Navigate";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
  position: relative;
`;
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
  cursor: pointer;
`;
const Form = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  justify: center;
  p {
    text-align: center;
  }
  margin: 25px 0px;
`;

const Period = styled(Form)``;
const OperateTime = styled(Form)``;
const Space = styled(Form)``;
const Map = styled(Form)``;

const RequestWrapper = styled(motion.div)`
  width: 100%;
  height: 400px;

  transform-origin: top center;
  display: flex;
  justify-content: center;
`;
const requestvariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1 },
  exit: { scaleY: 0 },
};
const GetMaptext = styled.p`
  width: 50%;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
  opacity: 0.8;
  cursor: pointer;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
const PopupSpace = styled.div`
  width: 90%;
`;
const Detail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
`;
const DetailTime = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  margin-left: 3%;
  margin-top: 3%;
`;
const ImageBox = styled.div`
  width: 100%;
  position: absolute;
  top: 10%;
`;

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const BookingTwo = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯
  const { brandId } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isYes, setIsYes] = useState(false);

  const requestbtnani = useAnimation();

  const getData = async () => {
    const data = await api.getPopupById(brandId);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data?.popup_detailplace);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Popinfodetail // 팝업의 본문 내용 컴포넌트 (운영 기간, 시간, 기획/운영, 키워드)
        bodytitle={null}
        textstyle={"center"}
        firsttitle={false}
        firstimg={true}
        width={"60%"}
        image={"https://popcon.store" + data?.popup?.popup_image01}
      />
      <Margin height="20" />
      {/* <Margin height="20" />
      <GetMaptext>팝업 요청 현황</GetMaptext>
      <Margin height="15" />

      <AnimatePresence>
        <RequestWrapper>
          <Kakaomap />
        </RequestWrapper>
        <Margin height="20" />
      </AnimatePresence>

      <Choose />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <CustomTimeSlot
        label="시간 선택"
        selectedTime={selectedTimeSlot}
        onChange={handleTimeSlotChange}
      /> */}
      {/* <div>
        <button onClick={notify}>Get Toast</button>
        <Toaster position="bottom-center" />
      </div> */}

      <Period>
        <Typo
          weight="600"
          style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
        >
          기간
        </Typo>
        <Typo>{data?.popup?.popup_date?.split("*")[0]}</Typo>
        <Typo>{data?.popup?.popup_date?.split("*")[1]}</Typo>
      </Period>
      <OperateTime>
        <Typo
          weight="600"
          style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
        >
          운영 시간
        </Typo>
        <Typo>{data?.popup?.popup_time}</Typo>
      </OperateTime>
      <Space>
        <Typo
          weight="600"
          style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
        >
          장소
        </Typo>
        <Typo>{data?.popup?.popup_detailplace?.split("/")[0]}</Typo>
        <Typo>{data?.popup?.popup_detailplace?.split("/")[1]}</Typo>
      </Space>
      <Map>
        <Typo
          weight="600"
          style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
        >
          지도 보기
        </Typo>
        <Kakaomap
          isOne={false}
          isTwo={true}
          text={data?.popup?.popup_map_place}
        />
      </Map>

      <Margin height="30" />
      <PopupButton
        onClick={() => navigate(`/popupbooking/${brandId}/bookinglast`)}
      >
        <Typo size="1.1rem" weight="600" color="white">
          예약하기
        </Typo>
      </PopupButton>
      <Margin height="30" />
      <NavigationBar />
      <Footer />
    </Wrapper>
  );
};

export default BookingTwo;
