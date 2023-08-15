import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown2 from "../../Components/Brand, ArtistCard/Carddown2";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Kakaomap2 from "../../Components/Kakao/Kakaomap2";
import Margin from "../../Components/Margin/Margin";
import RequestModal from "../../Components/Modal/PopRequestModal";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import RequestComplete from "./RequestComplete";
import ss from "../../assets/Icons/Card/NewJeans.jpg";
import Horizon from "../../Components/Horizon/Horizon";
import * as api from "../../api";

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

const Complete = styled(Form)``;
const CompleteText = styled(Form)`
  width: 80%;
  p {
    color: red;
  }
`;
const CompleteDetail = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
const CompleteAlert = styled(Form)`
  width: 70%;
  p {
    text-align: start;
  }
`;

const BookDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
  p {
    padding: 5px 0px;
  }
`;
const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 5px 0px;
  }
`;

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const BookingComplete = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯
  const { brandId } = useParams();

  const navigate = useNavigate();

  const [btnclicked, setBtnclicked] = useState(false);
  const [requestbtnclikced, setRequestbtnclicked] = useState(false);

  const [isYes, setIsYes] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [data, setData] = useState([]);

  const { state } = useLocation();

  const {
    time: { start, end },
  } = state;
  const { date } = state;

  const requestbtnani = useAnimation();
  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const postData = async () => {
    const time = `${start}:00~${end}:00`;
    await api.postPopupreservation(
      localStorage.getItem("Pk"),
      data?.id,
      date,
      time
    );
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
  const getData = async () => {
    const data = await api.getPopupById(brandId);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isYes) {
      setTimeout(() => yestoast(), 1000);
    }
  }, [isYes]);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Popinfodetail // 팝업의 본문 내용 컴포넌트 (운영 기간, 시간, 기획/운영, 키워드)
        isTabed={false}
        firsttitle={false}
        firstimg={true}
        bodytitle={true}
        bodyText={null}
        textstyle={"center"}
        width={"100%"}
        image={"https://popcon.store" + data?.popup_main_image}
      />
      <Margin height="10" />

      <Complete>
        <Typo fontType="title">예약 신청이 완료되었습니다.</Typo>
      </Complete>
      <CompleteText>
        <Typo weight="600">
          아래 예약 내역에 안내된 예약 시간 <br /> 3시간 이내에 언제든지
          입장하시면 되며, <br /> 인원 집중이 예상되는 입장 시작 시간보다는{" "}
          <br /> 여유를 두고 방문하시기 바랍니다.
        </Typo>
        <Typo weight="600">
          <br />
          마지막 세션(오후 5시 ~ 오후 8시)의 입장은 <br /> 오후 7시까지
          가능합니다.
        </Typo>
      </CompleteText>
      <CompleteDetail>
        <BookDate>
          <Typo weight="600">예약일</Typo>
          <Typo weight="600">시간</Typo>
        </BookDate>
        <Time>
          <Typo>{data?.popup_date?.split("*")[0]}</Typo>
          <Typo style={{ textAlign: "center" }}>
            {start}:00 ~ {end}:00
          </Typo>
        </Time>
      </CompleteDetail>
      <CompleteAlert>
        <Typo>
          • 카카오 알림톡 혹은 문자로 예약 관련 안내 사항이 발송됩니다.
        </Typo>
        <Typo>
          • 카카오 알림톡 혹은 문자로 발송되는 예약 결과를 반드시 확인 해주세요.
        </Typo>
        <Typo>
          • 카카오 알림톡 혹은 문자로 발송되는 예약 결과 메시지 삭제 시 행사
          참여가 어려울 수 있습니다.
        </Typo>
        <Typo>
          • 본인 명의로 된 카드와 신분증 확인 후 구매 가능하며, 제품 구매 개수에
          제한이 있을 수 있습니다.
        </Typo>
      </CompleteAlert>

      <PopupButton
        onClick={() => {
          window.scrollTo(0, 0);
          setIsYes((prev) => !prev);
          postData();
        }}
      >
        <Typo size="1.1rem" weight="600" color="white">
          확인
        </Typo>
      </PopupButton>
      <Margin height="30" />
      <Footer />

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
        <RequestComplete
          image={"https://popcon.store" + data?.popup_main_image}
          title={data?.popup_name + "\n예약이 완료되었습니다."}
        />
      </Modal>
      <Toaster position="top-center" />
    </Wrapper>
  );
};

export default BookingComplete;
