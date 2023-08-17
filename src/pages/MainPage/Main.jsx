import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdSlider from "../../Components/AdSlider/AdSlider";
import Category from "../../Components/PopupCategory/PopupCategory";
import Margin from "../../Components/Margin/Margin";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import SliderX from "../../Components/ArtistCategory/ArtistCategory";
import SmallCard from "../../Components/Card/SmallCard";
import Horizon from "../../Components/Horizon/Horizon";
import PostCard from "../../Components/Card/PostCard";
import ArtistCategory from "../../Components/ArtistCategory/ArtistCategory";
import NavigationBar from "../../Components/Navigate/Navigate";
import Footer from "../../Components/Footer/Footer";
import { MdArrowForwardIos } from "react-icons/md";
import LargeCard from "../../Components/Card/LargeCard";
import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";
import PostCardimg1 from "../../assets/Icons/Card/PostCardimg1.png";
import * as api from "../../api";
import Modal from "react-modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { istutorialOpend, tutorial } from "../../atom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Typo from "../../assets/Typo";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: whitesmoke;
`;
const SliderXwrapper = styled.div`
  position: relative;
  overflow-x: scroll;
  min-height: 270px;
  width: 100%;
  scroll-snap-type: x mandatory;
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
  display: flex;
  /* display: grid;
  grid-template-columns: repeat(${(props) => props.cards}, 1fr);
  gap: 20px; */
`;
const TutorialContainer = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 10px;
  position: absolute;
  gap: 7px;
`;
const Box = styled(motion.div)`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70vh;
`;
const Title = styled.p`
  font-size: 30px;
  width: 100%;
  text-align: center;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.url});
  background-size: 100% auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
`;
const TextWrap = styled.div``;
const VideoWrap = styled.div`
  background-color: white;
  box-shadow: 0px 5px 10px rgba(236, 117, 56, 0.3);
  border-radius: 20px;
  height: 400px;
  width: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const RightBtn = styled.div`
  position: absolute;
  height: 20px;
  right: -10px;
  top: 0;
  bottom: 0;
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
const boxvariants = {
  hidden: { x: 460 },
  visible: { x: 0 },
  exit: { x: -460 },
};

function Main() {
  const navigate = useNavigate();
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [hotpopupdata, setHotpopupdata] = useState([]);
  const [newbrandData, setNewbrandData] = useState([]);
  const [CardData, setCardData] = useState([]);

  const [index, setIndex] = useState(0);
  const [isOpened, setIsOpened] = useRecoilState(istutorialOpend);

  const [selectedCategory, setSelectedCategory] = useState("/");
  const [filteredBrandData, setFilteredBrandData] = useState([]);
  


  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      localStorage.removeItem("Pk");
      localStorage.removeItem("account_password");  
    }
    getData();
    getNewbrand();
    getCardinfo();
  }, []);

  const compareDate = (item) => {
    const arr = item?.brand_borndate.split("-");
    let sum;
    for (let i = 0; i < arr.length; ++i) {
      sum += parseInt(arr[i]);
    }
    return sum;
  };

  const getCardinfo = async () => {
    try {
      const pk = localStorage.getItem("Pk");
      const cardinfo = await api.getCardinfo(pk);
      if (cardinfo && cardinfo.length > 0) {
        setCardData(cardinfo);
        console.log(cardinfo);
        localStorage.setItem("account_password", cardinfo[0].account_password);
      } else {
        console.log("Card info is empty.");
        localStorage.removeItem("account_password");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const getData = async () => {
    const hotpopup = await api.getMainHotPopup();
    setHotpopupdata(hotpopup);
    console.log(hotpopup);
  };
  const getNewbrand = async () => {
    const newbrand = await api.getNewbrand();
    setNewbrandData(newbrand);
    console.log(newbrand);
  };
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 3);
  };


  const tutorialdata = useRecoilValue(tutorial);

  const id = 1;
  const handleCategoryClick = (categoryPath) => {
    setSelectedCategory(categoryPath);
    let filteredData = [];
  if (categoryPath === "/art") {
    filteredData = newbrandData?.filter((item) => item?.brand_category === 6);
  } else if (categoryPath === "/lit") {
    filteredData = newbrandData?.filter((item) => item?.brand_category === 7);
  } else if (categoryPath === "/video") {
    filteredData = newbrandData?.filter((item) => item?.brand_category === 8);
  } else if (categoryPath === "/music") {
    filteredData = newbrandData?.filter((item) => item?.brand_category === 9);
  }


  setFilteredBrandData(filteredData);
  };
  const getCategoryNumber = (categoryPath) => {
    switch (categoryPath) {
      case "/art":
        return 6;
      case "/lit":
        return 7;
      case "/video":
        return 8;
      case "/music":
        return 9;
      default:
        return 0; // 전체 카테고리
    }
  };
  
  return (
    <>
      <Wrapper>
        <Header left="logo" right={["login", "search"]} />
        <AdSlider />
        <Margin height="50" />
        <PopupTitle text="팝업 카테고리" bottomgap="20" />
        <Category listid="main" />
        <Margin height="30" />
        <PopupTitle
          isarrow={true}
          text="여기에 열어주세요"
          bottomgap="15"
          onClick={() => navigate("/popuphere")}
        />
        <SliderXwrapper2>
          <SliderXItems>
            <LargeCard
              image={NewJeans}
              title="NewJeans의 HYPE맑음"
              popcategory="팝업 스토어"
              detail="창작 예술"
              space={"하텍 해동 스룸G \n인하대학교"}
              date="2023.07.21~2023.08.19"
            />
            <LargeCard
              image={NewJeans}
              title="NewJeans의 HYPE맑음"
              popcategory="팝업 스토어"
              detail="창작 예술"
              space={"하텍 해동 스룸G \n인하대학교"}
              date="2023.07.21~2023.08.19"
            />
            <LargeCard
              image={NewJeans}
              title="NewJeans의 HYPE맑음"
              popcategory="팝업 스토어"
              detail="창작 예술"
              space={"하텍 해동 스룸G \n인하대학교"}
              date="2023.07.21~2023.08.19"
            />
          </SliderXItems>
        </SliderXwrapper2>

        <Margin height="30" />
        <PopupTitle
          isarrow={true}
          text="예매 가능한 인기 팝업"
          bottomgap="15"
          onClick={() => navigate("/popularpopup")}
        />
        <SliderXwrapper2>
          <SliderXItems>
            {hotpopupdata?.map((item) => (
              <LargeCard
                onClick={() => navigate(`/popupInfo/?id=${item.id}`)}
                image={"https://popcon.store" + item?.popup_image}
                title="NewJeans의 HYPE맑음"
                popcategory={item?.popup_category}
                detail="창작 예술"
                space={"하텍 해동 스룸G \n인하대학교"}
                date="2023.07.21~2023.08.19"
              />
            ))}
          </SliderXItems>
        </SliderXwrapper2>
        <Margin height="50" />
        <PopupTitle
          isarrow={true}
          text="팝업 포스트"
          bottomgap="10"
          onClick={() => navigate("/postList")}
        />
        <PostCard
          onClick={() => navigate("/popUpPost")}
          image={PostCardimg1}
          title="프랑스 밤잼 크렘드 마롱 팝업 스토어 현장"
          type="추천 포스트"
          main="크렘드마롱(Crème de Marrons)은 클레망포지에사의 140년 전통 프랑스산 밤잼 브랜드 입니다.
          크렘드마롱은 프랑스 남부 리옹 지역에서 수확하는
          야생밤을 원료로 깊은 밤의 풍미를 선사합니다."
        />
        <Margin height="60" />
        <PopupTitle
          onClick={() => navigate("/newbrand")}
          isarrow={true}
          text="새로운 팝업 브랜드를 만나보세요!"
          bottomgap="30"
        />
        <SliderXwrapper>
          <SliderXItems>
            {newbrandData
              ?.filter((item) => item?.type === 1)
              ?.sort(function(a, b) {
                if (compareDate(a) > compareDate(b)) {
                  return -1;
                } else {
                  return 1;
                }
              })
              ?.map((item) => (
                <SmallCard
                  onClick={() => navigate(`/brand/${item?.id}`)}
                  image={"https://popcon.store" + item?.brand_logo}
                  title={item?.brand_name}
                  category={item?.brand_category}
                  main={item?.brand_simple_intro}
                />
              ))}
          </SliderXItems>
        </SliderXwrapper>
        <Margin height="35" />
        <PopupTitle
          isarrow={true}
          text="독립 아티스트"
          bottomgap="20"
          onClick={() => navigate("/newartist")}
        />
        <ArtistCategory  handleCategoryClick={handleCategoryClick}/>
        <SliderXwrapper>
          <SliderXItems>
            {newbrandData
              ?.filter((item) => item?.type === 2)
              ?.filter((item) =>
                selectedCategory === "/"
                  ? true 
                  : item.brand_category === getCategoryNumber(selectedCategory)
              )
              ?.sort(function(a, b) {
                if (compareDate(a) > compareDate(b)) {
                  return -1;
                } else {
                  return 1;
                }
              })
              ?.map((item) => (
                <SmallCard
                  onClick={() => navigate(`/brand/${item?.id}`)}
                  image={"https://popcon.store" + item?.brand_logo}
                  title={item?.brand_name}
                  category={item?.brand_category}
                  main={item?.brand_simple_intro}
                />
              ))}
          </SliderXItems>
        </SliderXwrapper>
        <Margin height="20" />
        <Modal
          isOpen={isOpened}
          style={{
            overlay: {
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.1)",
              margin: "0px 3%",
            },
            content: {
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto auto",
              backgroundColor: "whitesmoke",
              width: "350px",
              height: "70vh",
              borderRadius: "30px",
              boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <TutorialContainer>
            <Row key={index}>
              {tutorialdata?.slice(index, index + 1).map((item) => (
                <Box
                  variants={boxvariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key={item.id}
                >
                  <Title>{item?.title}</Title>
                  <TextWrap>
                    <Typo>튜토리얼 설명 텍스트 칸입니다.</Typo>
                  </TextWrap>
                  <VideoWrap>
                    <Video
                      url={item?.video}
                      playsinline
                      autoPlay
                      muted
                      loop={true}
                    >
                      <source src={item?.video} type="video/mp4"></source>
                    </Video>
                  </VideoWrap>
                </Box>
              ))}
            </Row>
            <CloseBtn onClick={() => setIsOpened(false)}>
              <AiOutlineClose style={{ fontSize: 22 }} />
            </CloseBtn>
            <RightBtn onClick={() => handleNext()}>
              <MdOutlineKeyboardDoubleArrowRight style={{ fontSize: 30 }} />
            </RightBtn>
          </TutorialContainer>
        </Modal>
        <NavigationBar />
        <Footer />
      </Wrapper>
    </>
  );
}

export default Main;
