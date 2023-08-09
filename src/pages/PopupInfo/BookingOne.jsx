import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown2 from "../../Components/Brand, ArtistCard/Carddown2";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Kakaomap from "../../Components/Kakaomap/Kakaomap";
import Margin from "../../Components/Margin/Margin";
import RequestModal from "../../Components/Modal/PopRequestModal";
import img1 from "../../assets/Icons/Card/PopupCardimg1.png";
import Calendar from "../../Components/Calendar/Calendar";
import CustomTimeSlot from "../../Components/Calendar/CustomTimeSlot";
import Choose from "../../Components/Calendar/Choose";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import RequestComplete from "./RequestComplete";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
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

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const BookingOne = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯
  const { brandId } = useParams();

  console.log(brandId);

  const navigate = useNavigate();

  const [btnclicked, setBtnclicked] = useState(false);
  const [requestbtnclikced, setRequestbtnclicked] = useState(false);

  const [isYes, setIsYes] = useState(false);

  const imagePathsFromBackend = [
    "이미지1의_경로.jpg",
    "이미지2의_경로.jpg",
    // 추가적인 이미지들의 경로
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const requestbtnani = useAnimation();
  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  useEffect(() => {
    if (btnclicked) {
      requestbtnani.start("visible");
    } else {
      requestbtnani.start("hidden");
    }
  }, [btnclicked]);

  const yestoast = () =>
    toast.success("팝업 신청이 완료되었습니다.", {
      duration: 6000,
      style: {
        marginTop: 50,
      },
    });

  useEffect(() => {
    if (isYes) {
      setTimeout(() => yestoast(), 1000);
    }
  }, [isYes]);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Cardup
        name="IAB STUDIO"
        backimageUrl={img1}
        CircleimageUrl="img/Artistimg/iabCircleimg.png"
      />
      <Carddown2
        toptext="빈지노의 새로운 노비츠키 한정판 팝업 스토어"
        bodytext="10년 만에 세상으로 모습을 들어낸 빈지노가 낸 음반 노비츠키를 한정판으로 판매할 예정이다. 앨범 발매기념 팝업 스토어는 3일 간 운영되고 집계된 의결을 바탕으로 지역을 선택하여 열릴 예정이다."
      />
      <Popinfodetail // 팝업의 본문 내용 컴포넌트 (운영 기간, 시간, 기획/운영, 키워드)
        isTabed={false}
        firsttitle={"팝업 소개"}
        bodytitle={[
          "• 운영 기간: ",
          "• 운영 시간: ",
          "• 기획/운영: ",
          "• 소개: ",
          "• 키워드: ",
          "• 자료 출처: ",
        ]}
        bodyText={
          "2023.07.06(목) ~ 2023.07.12 (수)\n행사 종료\n아이앱 스튜디오, 더현대 서울IAB STUDIO POP-UP STORE at ‘THE HYUNDAI SEOUL' 아이앱 스튜디오가 여의도에 위치한 ‘더현대 서울’에서 팝업 스토어를 진행합니다. 오프라인으로 열리는 이번 팝업 스토어에서는 새롭게 선보이는 의류들과 아이웨어 라인이 공개되며, 팝업 품목 리스트와 구매 방식에 관련된 정보는 추후 공개될 예정입니다.\niabstudiopop-upstore, iabstudiopop-upstore, iabstudio, 아이앱스튜디오, 더현대서울, 아이앱스튜디오팝업,팝업, 팝업스토어, 더현대, 서울팝업, 서울가볼만한곳, 브랜드팝업, popup, popupstore\n아이앱 스튜디오 인스타그램 공식 계정"
        }
      />
      <Margin height="20" />

      <PopupinfoImg>{renderImages(imagePathsFromBackend)}</PopupinfoImg>

      <Margin height="30" />
      <PopupSpace>
        <Typo style={{ width: "100%" }} fontType="large">
          팝업 장소
        </Typo>
        <Margin height="20" />
        <Detail>
          <Typo weight="600" style={{ paddingRight: 10 }}>
            • 운영 시간:{" "}
          </Typo>
          <Typo weight="400">12:00 ~ 18:00</Typo>
        </Detail>
        <Detail>
          <Typo weight="600" style={{ paddingRight: 10 }}>
            • 기획/운영:{" "}
          </Typo>
          <Typo weight="400">아이앱 스튜디오, Vunque</Typo>
        </Detail>
        <Typo style={{ padding: "10px 0px", lineHeight: 1.2 }}>
          많은 분들의 성원에 힘입어 이번 팝업 장소는 다음과 같이 선정되었습니다!
        </Typo>

        <DetailTime>
          <div>
            <Typo>• 2023.07.06(목) ~ 2023.07.12(수)</Typo>
            <Typo style={{ paddingLeft: 5 }}>
              17,yeonmujang-gil, Seongdong-gu, Seoul
            </Typo>
          </div>
          <div>
            <Typo>• 2023.07.06(목) ~ 2023.07.12(수)</Typo>
            <Typo style={{ paddingLeft: 5 }}>
              17,yeonmujang-gil, Seongdong-gu, Seoul
            </Typo>
          </div>
        </DetailTime>
      </PopupSpace>

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

      <Margin height="30" />
      <PopupButton onClick={() => navigate("bookingtwo")}>
        <Typo size="1.1rem" weight="600" color="white">
          예약하기
        </Typo>
      </PopupButton>

      <Margin height="30" />

      <Footer />
      <Modal
        isOpen={requestbtnclikced && !isYes}
        onRequestClose={false}
        shouldCloseOnEsc={false}
        // shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
        // closeTimeoutMS={1000}
        overlayElement={(props, overlayElement) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween" }}
            {...props}
          >
            {overlayElement}
          </motion.div>
        )}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.3)",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto auto",
            width: "325px",
            height: "200px",
            borderRadius: "20px",
          },
        }}
      >
        <RequestModal setIsYes={setIsYes} />
      </Modal>
      <Modal
        isOpen={isYes}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.3)",
            width: "100vw",
            height: "100vh",
          },
          content: {
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: -40,
            backgroundColor: "transparent",
            border: "none",
            margin: "auto auto",
            width: "330px",
            height: "500px",
            borderRadius: "20px",
          },
        }}
      >
        <RequestComplete />
      </Modal>
      <Toaster position="top-center" />
    </Wrapper>
  );
};

export default BookingOne;
