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

function Main() {
  const navigate = useNavigate();
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [hotpopupdata, setHotpopupdata] = useState([]);
  const [newbrandData, setNewbrandData] = useState([]);
  const [CardData, setCardData] = useState([]);

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

  const id = 1;

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
              onClick={() => navigate(`/PopupInfo/${id}`)}
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
        <ArtistCategory />
        <SliderXwrapper>
          <SliderXItems>
            {newbrandData
              ?.filter((item) => item?.type === 2)
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
        <NavigationBar />
        <Footer />
      </Wrapper>
    </>
  );
}

export default Main;
