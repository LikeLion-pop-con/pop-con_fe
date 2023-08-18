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
import PostCardimg1 from "../../assets/Icons/Card/PostCardimg1.png";
import AdminCard from "../../Components/Card/AdminCard";
import * as api from "../../api";
import AdminCardHeart from "../../assets/Icons/Card/AdminCardHeart.svg";
import { useRecoilState } from "recoil";
import { isClicked } from "../../atom";
import logo from "../../assets/Icons/Header/logo.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
`;
const SliderXwrapper = styled.div`
  position: relative;
  overflow-x: scroll;
  min-height: 265px;
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
const SliderXwrapper3 = styled.div`
  position: relative;
  overflow-x: scroll;
  min-height: 450px;
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
const Icon = styled.img`
  position: absolute;
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다
  z-index: 10;
  right: 25px;
  bottom: 25px;
  width: 35px;
  height: 35px;
  filter: ${(props) =>
    props.clicked
      ? "invert(0.5) sepia(1) saturate(1000%) hue-rotate(0deg)"
      : "none"};
`;

function AdminMain() {
  const navigate = useNavigate();
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [hotpopupdata, setHotpopupdata] = useState([]);
  const [newbrandData, setNewbrandData] = useState([]);
  const [placepopup, setplacepopup] = useState([]);
  const [CardData, setCardData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("/");
  const [filteredBrandData, setFilteredBrandData] = useState([]);
  const [isCardLiked, setIsCardLiked] = useState(false);
  const [Popwill, setPopwill] = useState([]);
  const [PostData, setPostData] = useState([]);
  const [isLiked, setIsLiked] = useRecoilState(isClicked);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      localStorage.removeItem("Pk");
      localStorage.removeItem("account_password");
    }
    getData();
    getNewbrand();
    getCardinfo();
    getPopupplace();
    getPopupwill();
    getPostall();
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
  const getPopupplace = async () => {
    const placepopup = await api.getPopupplace();
    setplacepopup(placepopup);
    console.log(placepopup);
  };
  const getPopupwill = async () => {
    const PopwillData = await api.getPopupwill();
    setPopwill(PopwillData);
    console.log(PopwillData);
  };
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
  const getPostall = async () => {
    const PostData = await api.getbrandpostall();
    setPostData(PostData);
    console.log(PostData);
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
          text="추천 팝업 공간"
          bottomgap="15"
          onClick={() => navigate("/PopupSpace")}
        />
        <SliderXwrapper2>
          <SliderXItems>
            {placepopup?.map((item, index) => (
              <div style={{ position: "relative" }}>
                <AdminCard
                  style={{ position: "relative" }}
                  id={item.id}
                  onClick={() => navigate(`/popupspace/${item.id}`)}
                  image={"https://popcon.store" + item?.popup_place_image01}
                  title={item?.popup_place_title}
                  space={item?.popup_place_location}
                  floor={item?.popup_place_floor}
                  area={"연면적 : " + item?.popup_place_area}
                ></AdminCard>
                <Icon src={logo} alt="logo" clicked={isClicked[item.id]} />
              </div>
            ))}
          </SliderXItems>
        </SliderXwrapper2>
        <Margin height="30" />

        <PopupTitle
          isarrow={true}
          text="여기에 열어주세요"
          bottomgap="15"
          onClick={() => navigate("/popuphere")}
        />
        <SliderXwrapper2>
          <SliderXItems>
            {Popwill?.map((item) => (
              <LargeCard
                onClick={() => navigate(`/popupInfo/?id=${item.id}`)}
                image={"https://popcon.store" + item?.popup_image01}
                title={item?.popup_name}
                popcategory={item?.popup_category}
                detail={item?.brand_info}
                space={item?.popup_detailplace}
                date={item?.popup_date}
              />
            ))}
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
                image={"https://popcon.store" + item?.popup_image01}
                title={item?.popup_name}
                popcategory={item?.popup_category}
                detail={item?.brand_info}
                space={item?.popup_detailplace}
                date={`${item?.popup_date}~${item?.popup_closedate}`}
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
        <SliderXwrapper3>
          <SliderXItems>
            {PostData?.map((item) => (
              <PostCard
                onClick={() => navigate(`/popuppost/?id=${item?.brand}`)}
                image={"https://popcon.store" + item?.brandpost_image}
                title={item?.brandpost_name}
                type="추천 포스트"
                main={
                  item?.brandpost_intro.length > 50
                    ? item.brandpost_intro.substring(0, 30) + "..."
                    : item.brandpost_intro
                }
              />
            ))}
          </SliderXItems>
        </SliderXwrapper3>
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
        <ArtistCategory handleCategoryClick={handleCategoryClick} />
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
        <NavigationBar />
        <Footer />
      </Wrapper>
    </>
  );
}

export default AdminMain;
