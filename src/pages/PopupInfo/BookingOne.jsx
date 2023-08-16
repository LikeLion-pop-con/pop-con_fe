import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown2 from "../../Components/Brand, ArtistCard/Carddown2";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Margin from "../../Components/Margin/Margin";
import toast, { Toaster } from "react-hot-toast";
import * as api from "../../api";
import NavigationBar from "../../Components/Navigate/Navigate";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
  white-space: pre-line;
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
const PopupSpace = styled.div`
  width: 90%;
`;
const DetailTime = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  margin-left: 3%;
  margin-top: 3%;
`;
const DetailLink = styled.p`
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const BookingOne = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯

  const { brandId } = useParams();
  console.log(brandId);

  const navigate = useNavigate();

  const [btnclicked, setBtnclicked] = useState(false);
  const [requestbtnclikced, setRequestbtnclicked] = useState(false);
  const [data, setData] = useState([]);
  const [imagePathsFromBackend, setImagePathsFromBackend] = useState([]);
  const [isYes, setIsYes] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isshared, setIsShared] = useState(false);
  const [isUserLiked, setIsUserLiked] = useState(false);

  const movetoLink = (link) => {
    window.location.href = link;
  };

  const getData = async () => {
    const data = await api.getPopupById(brandId);
    setData(data?.popup);

    console.log(data);

    const newImagePaths = [];

    for (let i = 1; i <= 7; i++) {
      const key = `popup_image${String(i).padStart(2, "0")}`;
      const imagePath = data?.popup[key];

      if (imagePath !== null && imagePath !== undefined) {
        newImagePaths.push(imagePath);
      }
    }

    setImagePathsFromBackend((prevImagePaths) => [
      ...prevImagePaths,
      ...newImagePaths,
    ]);
  };

  const userconfirmtoast = () => {
    toast(
      (t) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "6vh",
          }}
        >
          <p>로그인이 필요한 서비스입니다.</p>
          <button
            onClick={() => navigate("/login")}
            style={{
              color: "black",
              border: "none",
              backgroundColor: "#ec7538",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              width: "50%",
              height: "3vh",
              cursor: "pointer",
            }}
          >
            로그인 하러 가기
          </button>
        </div>
      ),
      {
        icon: "👏",
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const userConfirm = () => {
    if (localStorage.getItem("Pk")) {
      navigate("bookingtwo");
    } else {
      window.scrollTo(0, 0);
      userconfirmtoast();
    }
  };

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Cardup
        name={data?.brand_info}
        backimageUrl={"https://popcon.store" + data?.popup_main_image}
        CircleimageUrl={"https://popcon.store" + data?.popup_brand_logo}
      />
      <Carddown2
        id={brandId}
        toptext={data?.popup_name}
        bodytext={data?.popup_simple_info}
        isLiked={isLiked} // isLiked 상태 전달
        setIsLiked={setIsLiked} // 좋아요 버튼 클릭 핸들러 전달
        setIsShared={setIsShared}
      />
      <Popinfodetail // 팝업의 본문 내용 컴포넌트 (운영 기간, 시간, 기획/운영, 키워드)
        isTabed={true}
        firsttitle={true}
        firstimg={true}
        bodytitle={[
          "• 운영 기간: ",
          "• 운영 시간: ",
          "• 기획/운영: ",
          "• 소개: ",
        ]}
        image={"https://popcon.store" + data?.popup_main_image}
        bodyText={`${data?.popup_date}\n${data?.popup_time}\n${data?.popup_operation}\n${data?.popup_info}`}
      />
      <Margin height="20" />

      <PopupinfoImg>
        {imagePathsFromBackend.map((image, index) => (
          <Image
            key={index}
            src={"https://popcon.store" + image}
            alt="팝업 이미지"
          />
        ))}
      </PopupinfoImg>

      <Margin height="30" />
      <PopupSpace>
        <Typo style={{ width: "100%" }} fontType="large">
          팝업 장소
        </Typo>
        <Margin height="20" />

        <Typo style={{ padding: "10px 20px", lineHeight: 1.2 }}>
          많은 분들의 성원에 힘입어 이번 팝업 장소는 다음과 같이 선정되었습니다!
        </Typo>

        <DetailTime>
          <div>
            <Typo weight="600">• {data?.popup_date?.split("*")[0]}</Typo>
            <Margin height="3" />
            <Typo size="24" color="main" style={{ paddingLeft: 5 }}>
              {data?.popup_detailplace}
            </Typo>
          </div>
        </DetailTime>
      </PopupSpace>

      <Margin height="30" />
      <DetailLink onClick={() => movetoLink(data?.popup_add_info)}>
        더 많은 정보를 알고 싶다면 ?
      </DetailLink>

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
      <PopupButton onClick={() => userConfirm()}>
        <Typo size="1.1rem" weight="600" color="white">
          예약하기
        </Typo>
      </PopupButton>
      <Margin height="30" />
      <Footer />
      <Toaster position="top-center" />
      <NavigationBar />
    </Wrapper>
  );
};

export default BookingOne;
