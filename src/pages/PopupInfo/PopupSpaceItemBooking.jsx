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
import * as api from "../../api";
import { useEffect } from "react";
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
const IMG = styled.div`
  width: 90%;
  height: 400px;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
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
  const { spaceId } = useParams();

  console.log(spaceId);

  const navigate = useNavigate();
  let user_id,
    popup_place_pkey,
    reserved_basement_floor,
    reserved_ground_floor,
    formattedDate,
    reserved_date;

  const imagePathsFromBackend = [
    "이미지1의_경로.jpg",
    "이미지2의_경로.jpg",
    // 추가적인 이미지들의 경로
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBasementTimeSlot, setSelectedBasementTimeSlot] = useState(
    null
  );
  const [bf, setBf] = useState(0);
  const [f, setF] = useState(0);
  const [selectedGroundTimeSlot, setSelectedGroundTimeSlot] = useState(null);
  const [isclicked, setIsclicked] = useState(false);
  const [placepopup, setplacepopup] = useState([]);
  const handleTimeSlotChange = (timeSlot, floorType) => {
    if (floorType === "basement") {
      setSelectedBasementTimeSlot(timeSlot);
    } else if (floorType === "ground") {
      setSelectedGroundTimeSlot(timeSlot);
    }
    console.log("Selected Floor:", timeSlot);
  };
  const getPopupplace = async () => {
    const placepopup = await api.getPopplaceinfo(spaceId);
    setplacepopup(placepopup);
    console.log(placepopup);
  };
  useEffect(() => {
    getPopupplace();
  }, []);
  const handleReservation = () => {
    // 사용자 아이디 및 팝업 공간 정보를 변수에 저장
    user_id = localStorage.getItem("Pk");
    popup_place_pkey = placepopup.pkey;
    reserved_basement_floor = selectedBasementTimeSlot?.start
      ? selectedBasementTimeSlot.start.toString().replace("층", "")
      : null; // 예약된 층 정보

    reserved_ground_floor = selectedGroundTimeSlot?.start
      ? selectedGroundTimeSlot.start.toString().replace("층", "")
      : null; // 예약된 층 정보
    formattedDate = selectedDate.toISOString()?.split("T")[0];
    reserved_date = formattedDate; // 선택한 날짜 정보
    console.log(user_id);
    console.log(popup_place_pkey);
    console.log(reserved_basement_floor);
    console.log(reserved_ground_floor);
    console.log(formattedDate);
    console.log(reserved_date);
    api
      .postPlacereservation(
        user_id,
        popup_place_pkey,
        reserved_basement_floor,
        reserved_ground_floor,
        reserved_date
      )
      .then((response) => {
        console.log("Reservation Successful:", response);
        // 예약 성공에 대한 처리 (예: 알림 메시지)
      })
      .catch((error) => {
        console.error("Reservation Error:", error);
        // 예약 실패에 대한 처리 (예: 에러 메시지)
      });
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
        firstimg={true}
        bodytitle={null}
        bodyText={null}
        textstyle={"center"}
        width={"100%"}
        image={`https://popcon.store${placepopup.popup_place_image03}`}
      />
      <Margin height="40" />
      <Horizon width="80%" color="black" />
      <Margin height="40" />

      <Choose />
      <Calendar
        style={{ touchAction: isclicked && "none" }}
        selectedDate={selectedDate}
        setSelectedDate={(date) => {
          console.log("Selected Date:", date); // 선택한 날짜 콘솔에 출력
          setSelectedDate(date);
        }}
        maxDate={new Date("2023-09-10")}
      />
      {placepopup.popup_place_basement_floor && (
        <CustomFloor
          label="지하 층수 선택"
          selectedTime={selectedBasementTimeSlot}
          floorCount={placepopup.popup_place_basement_floor}
          onChange={(timeSlot) => {
            handleTimeSlotChange(timeSlot, "basement");
            setBf(timeSlot?.start);

            console.log(timeSlot?.start);
          }}
        />
      )}

      {placepopup.popup_place_ground_floor && (
        <CustomFloor
          label="지상 층수 선택"
          selectedTime={selectedGroundTimeSlot}
          floorCount={placepopup.popup_place_ground_floor}
          onChange={(timeSlot) => {
            handleTimeSlotChange(timeSlot, "ground");
            setF(timeSlot?.start);
          }}
        />
      )}
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
          handleReservation();
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
          <RequestComplete
            isSpace={true}
            bf={bf}
            f={f}
            image={"https://popcon.store" + placepopup.popup_place_image02}
            title="공간대여 신청이 완료되었습니다 !!"
            date={selectedDate.toLocaleDateString()?.split("T")[0]}
          />
        </Modal>
      )}
      <Margin height="30" />
      <Footer />
      <Toaster position="top-center" />
    </Wrapper>
  );
};

export default PopupSpaceItemBooking;
