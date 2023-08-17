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
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Kakaomap from "../../Components/Kakao/Kakaomap";
import Margin from "../../Components/Margin/Margin";
import RequestModal from "../../Components/Modal/PopRequestModal";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import RequestComplete from "./RequestComplete";
import { postMylikepopup, getPopupById, postPopuprequest } from "../../api";
import KakaoShare from "../../Components/Kakao/KakaoShare";
import { AiFillPicture } from "react-icons/ai";
import logo from "../../assets/Icons/Header/logo.png";

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

const renderImages = (imagePaths) => {
  return imagePaths?.map((imagePath, index) => (
    <Image
      key={index}
      src={"https://popcon.store" + imagePath}
      alt="팝업 이미지"
    />
  ));
};

const PopupInfo = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯
  const params = useLocation();
  const navigate = useNavigate();
  const brandId = new URLSearchParams(params.search).get("id");

  const [isLiked, setIsLiked] = useState(false);
  const [btnclicked, setBtnclicked] = useState(false);
  const [requestbtnclikced, setRequestbtnclicked] = useState(false);
  const [isYes, setIsYes] = useState(false);
  const [popupinfo, setPopupinfo] = useState({});

  const [imagePathsFromBackend, setImagePathsFromBackend] = useState([]);

  const [isshared, setIsShared] = useState(false);

  const requestbtnani = useAnimation();
  // const isPopupinfoPage = useMatch(`/popupinfo/${brandId}`);

  const getPopupinfo = async () => {
    const data = await getPopupById(brandId);
    console.log(data);
    setPopupinfo(data);

    const newImagePaths = [];

    for (let i = 1; i <= 7; i++) {
      const key = `popup_image${String(i).padStart(2, "0")}`;
      const imagePath = data[key];

      if (imagePath !== null && imagePath !== undefined) {
        newImagePaths.push(imagePath);
      }
    }

    setImagePathsFromBackend((prevImagePaths) => [
      ...prevImagePaths,
      ...newImagePaths,
    ]);
  };

  useEffect(() => {
    if (btnclicked) {
      requestbtnani.start("visible");
    } else {
      requestbtnani.start("hidden");
    }
  }, [btnclicked]);

  useEffect(() => {
    getPopupinfo();

    // console.log(popupinfo?.id, localStorage.getItem("Pk"));

    console.log(imagePathsFromBackend);
  }, []);
  const handleRequestClicked = () => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("Pk")) {
      setTimeout(() => setRequestbtnclicked((prev) => !prev), 500);
    } else {
      userconfirmtoast();
    }
  };

  const yestoast = () =>
    toast.success("팝업 신청이 완료되었습니다.", {
      duration: 6000,
      style: {
        marginTop: 50,
      },
    });
  const handletoast = () => {
    window.location = "/login";
  };
  const userconfirmtoast = () => {
    toast((t) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "6vh",
          width: "260px",
        }}
      >
        <img
          style={{ marginRight: 10 }}
          width="30"
          height="30"
          src={logo}
        ></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>로그인이 필요한 서비스입니다.</p>
          <button
            onClick={() => handletoast()}
            style={{
              marginTop: 5,
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
      </div>
    ));
  };

  useEffect(() => {
    if (isYes && requestbtnclikced) {
      setTimeout(() => yestoast(), 1000);
    }
    const user = localStorage.getItem("Pk");
    if (user && isYes) {
      console.log(brandId, user);
      postPopuprequest(brandId, user);
      console.log("is posted !!");
    }
  }, [isYes]);

  return (
    <Wrapper transition={{ type: "tween" }}>
      <Header left="logo" right={["login", "search"]} />
      <Cardup
        name={popupinfo?.brand?.brand_info} // 브랜드이름
        backimageUrl={
          "https://popcon.store" + popupinfo?.brand?.brand_main_image
        }
        CircleimageUrl={"https://popcon.store" + popupinfo?.brand?.brand_logo}
      />
      <Carddown2
        id={brandId}
        toptext={popupinfo?.popup?.popup_name} // 팝업 이름
        bodytext={popupinfo?.popup?.popup_simple_info}
        // 간단 소개
        isLiked={isLiked} // isLiked 상태 전달
        setIsLiked={setIsLiked} // 좋아요 버튼 클릭 핸들러 전달
        setIsShared={setIsShared}
      />
      {isshared && (
        <KakaoShare
          title={popupinfo?.popup?.popup_name}
          info={popupinfo?.popup?.popup_simple_info}
          image={"https://popcon.store" + popupinfo?.popup?.popup_image01}
        />
      )}
      <Popinfodetail
        isTabed={true}
        firstimg={true}
        firsttitle={true}
        bodytitle={[
          "• 운영 기간: ",
          "• 운영 시간: ",
          "• 기획/운영: ",
          "• 소개: ",
        ]}
        image={"https://popcon.store" + popupinfo?.popup?.popup_image01}
        bodyText={`${popupinfo?.popup?.popup_opendate} ~ ${popupinfo?.popup?.popup_closedate}\n${popupinfo?.popup?.popup_opentime} ~ ${popupinfo?.popup?.popup_closetime}\n${popupinfo?.popup?.popup_operation}\n${popupinfo?.popup?.popup_info}`}
      />
      <PopupinfoImg>{renderImages(imagePathsFromBackend)}</PopupinfoImg>
      <Margin height="20" />
      <GetMaptext>팝업 요청 현황</GetMaptext>
      <Margin height="15" />

      <AnimatePresence>
        <RequestWrapper>
          <Kakaomap
            isOne={true}
            isTwo={false}
            Seoul={popupinfo?.popup?.Seoul}
            Busan={popupinfo?.popup?.Busan}
            Chungcheongbuk_Province={popupinfo?.popup?.Chungcheongbuk_Province}
            Chungcheongnam_Province={popupinfo?.popup?.Chungcheongnam_Province}
            Daegu={popupinfo?.popup?.Daegu}
            Daejeon={popupinfo?.popup?.Daejeon}
            Gangwon_Province={popupinfo?.popup?.Gangwon_Province}
            Gwangju={popupinfo?.popup?.Gwangju}
            Gyeonggi_Province={popupinfo?.popup?.Gyeonggi_Province}
            Gyeongsangbuk_Province={popupinfo?.popup?.Gyeongsangbuk_Province}
            Gyeongsangnam_Province={popupinfo?.popup?.Gyeongsangnam_Province}
            Incheon={popupinfo?.popup?.Incheon}
            Jeju_Special_Self_Governing_Province={
              popupinfo?.popup?.Jeju_Special_Self_Governing_Province
            }
            Jeollabuk_Province={popupinfo?.popup?.Jeollabuk_Province}
            Jeollanam_Province={popupinfo?.popup?.Jeollanam_Province}
            Sejong={popupinfo?.popup?.Sejong}
            Ulsan={popupinfo?.popup?.Ulsan}
          />
        </RequestWrapper>
        <Margin height="20" />
      </AnimatePresence>

      <PopupButton
        onClick={() => {
          handleRequestClicked();
        }}
      >
        <Typo size="1.1rem" weight="600" color="white">
          팝업 요청하기
        </Typo>
      </PopupButton>

      <Margin height="30" />

      <Footer />
      {localStorage.getItem("Pk") && (
        <>
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
            <RequestComplete
              image={"https://popcon.store" + popupinfo?.popup?.popup_image01}
              title={popupinfo?.popup?.popup_name + " \n신청 완료되었습니다."}
            />
          </Modal>
        </>
      )}
      <Toaster position="top-center" />
    </Wrapper>
  );
};

export default PopupInfo;
