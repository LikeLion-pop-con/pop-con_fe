import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Margin from "../../Components/Margin/Margin";
import Calendar from "../../Components/Calendar/Calendar";
import CustomTimeSlot from "../../Components/Calendar/CustomTimeSlot";
import Choose from "../../Components/Calendar/Choose";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import ss from "../../assets/Icons/Card/NewJeans.jpg";
import Horizon from "../../Components/Horizon/Horizon";
import CustomFloor from "../../Components/Calendar/CustomFloor";
import RequestComplete from "./RequestComplete";

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
  justify-content: center;
  p {
    text-align: center;
  }
  margin: 25px 0px;
`;
const Detail = styled.div`
  width: 90%;
`;

const Period = styled(Form)``;
const OperateTime = styled(Form)``;
const Space = styled(Form)``;
const Map = styled(Form)``;

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const PopupSpaceItemBooking = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯
  const { brandId } = useParams();

  console.log(brandId);

  const navigate = useNavigate();

  const imagePathsFromBackend = [
    "이미지1의_경로.jpg",
    "이미지2의_경로.jpg",
    // 추가적인 이미지들의 경로
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isclicked, setIsclicked] = useState(false);

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const yestoast = () =>
    toast.success("팝업 신청이 완료되었습니다.", {
      duration: 6000,
      style: {
        marginTop: 50,
      },
    });

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Popinfodetail // 팝업의 본문 내용 컴포넌트 (운영 기간, 시간, 기획/운영, 키워드)
        isTabed={false}
        firsttitle={null}
        bodytitle={null}
        bodyText={null}
        textstyle={"center"}
        width={"100%"}
        image={ss}
      />
      <Margin height="20" />

      <Horizon width="80%" color="black" />
      <Margin height="20" />

      <Choose />
      <Calendar
        style={{ touchAction: isclicked && "none" }}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <CustomFloor
        label="층수 선택"
        selectedTime={selectedTimeSlot}
        onChange={handleTimeSlotChange}
      />
      <Margin height="20" />
      <Detail>
        <Typo size="14px" color="red" weight="600" style={{ lineHeight: 1.5 }}>
          {
            "· 세션 선택 시간 내 입장 해주셔야합니다. \nex. 첫번째 타임 선택 시, 오전11시부터 오후 2시 사이 언제든 입장하시면 됩니다. \n· 팝업 스토어 내실시간 인원 수에 따라, 안전을 위해 입장 대기가 발생할 수 있습니다. \n·동반인은 별도 예약 혹은 현장등록을 진행하셔야 합니다. \n· 발렛, 주차는불가 합니다."
          }
        </Typo>
      </Detail>
      <Margin height="50" />
      <PopupButton
        onClick={() => {
          window.scrollTo(0, 0);
          setIsclicked(true);
        }}
      >
        <Typo size="1.1rem" weight="600" color="white">
          예약 완료
        </Typo>
      </PopupButton>
      <Margin height="30" />
      <Detail>
        <Typo size="14px" weight="600" style={{ lineHeight: 1.5 }}>
          {
            "[고객 안내 주의사항] \n* 본 행사의 시간대별 예약은 선착순으로 마감됩니다. \n* 세션은 현장 상황에 따라 유동적으로 운영될 수 있습니다."
          }
        </Typo>
      </Detail>
      {isclicked && (
        <Modal
          isOpen={isclicked}
          onRequestClose={false}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.1)",
              width: "100vw",
              height: "100vh",
              touchAction: "none",
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
              touchAction: "none",
            },
          }}
        >
          <RequestComplete style={{ zIndex: 1000 }} />
        </Modal>
      )}
      <Margin height="30" />
      <Footer />
      <Toaster position="top-center" />
    </Wrapper>
  );
};

export default PopupSpaceItemBooking;
