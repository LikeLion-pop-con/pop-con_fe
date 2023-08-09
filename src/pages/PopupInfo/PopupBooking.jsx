import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown2 from "../../Components/Brand, ArtistCard/Carddown2";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
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
const Tab = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
`;
const StatusBar = styled.div`
  position: absolute;
  height: 2px;
  background-color: #ec7538;
  bottom: 0;
  width: 80%;
`;

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const PopupBooking = () => {
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
    <Wrapper transition={{ type: "tween" }}>
      
      <Outlet context={{ currentId: brandId }} />
    </Wrapper>
  );
};

export default PopupBooking;
