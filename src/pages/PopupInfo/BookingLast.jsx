import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Margin from "../../Components/Margin/Margin";
import Calendar from "../../Components/Calendar/Calendar";
import CustomTimeSlot from "../../Components/Calendar/CustomTimeSlot";
import Choose from "../../Components/Calendar/Choose";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import * as api from "../../api";
import Horizon from "../../Components/Horizon/Horizon";
import { parse } from "date-fns";
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

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const BookingLast = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯
  const { brandId } = useParams();

  console.log(brandId);

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await api.getPopupById(brandId);
    setData(data?.popup);
  };

  console.log(localStorage.getItem("pk"));

  useEffect(() => {
    getData();

    console.log(data);
  }, []);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({
    start: parseInt(data?.popup_opentime?.slice(0, 2)),
    end: parseInt(data?.popup_opentime?.slice(0, 2)) + 3,
  });

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    console.log(selectedTimeSlot);
  };

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Popinfodetail // 팝업의 본문 내용 컴포넌트 (운영 기간, 시간, 기획/운영, 키워드)
        isTabed={false}
        firsttitle={false}
        firstimg={true}
        bodytitle={null}
        bodyText={null}
        textstyle={"center"}
        width={"100%"}
        image={"https://popcon.store" + data?.popup_main_image}
      />
      <Margin height="20" />

      <Horizon width="80%" color="black" />
      <Margin height="20" />

      <Choose />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <CustomTimeSlot
        label="시간 선택"
        selectedTime={selectedTimeSlot}
        onChange={handleTimeSlotChange}
        opentime={data?.popup_opentime?.slice(0, 5)}
        closetime={data?.popup_closetime?.slice(0, 5)}
      />

      <Margin height="50" />
      <PopupButton
        onClick={() =>
          navigate(`/popupbooking/${brandId}/bookingcomplete`, {
            state: {
              time: selectedTimeSlot,
              date: selectedDate.toLocaleDateString(),
            },
          })
        }
      >
        <Typo size="1.1rem" weight="600" color="white">
          예약하기
        </Typo>
      </PopupButton>
      <Margin height="30" />
      <NavigationBar />
      <Footer />
      <Toaster position="top-center" />
    </Wrapper>
  );
};

export default BookingLast;
