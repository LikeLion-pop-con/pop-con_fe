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
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SliderXwrapper = styled.div`
  position: relative;
  overflow-x: scroll;
  min-height: 250px;
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

  // useEffect(() => {
  //   const data = getData();

  //   console.log(data);
  // });

  // const getData = async () => {
  //   const response = await axios
  //     .get(`https://popcon.store/main/1`)
  //     .then((res) => res.data);

  //   console.log(response);
  //   return response;
  // };

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
              onClick={() => navigate("/PopupInfo")}
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
            <LargeCard
              onClick={() => navigate(`/popupInfo/${id}`)}
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
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="로제"
              category="이쁘다"
              main="진짜 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/iab_box.jpg"
              title="iab"
              category="이쁘다"
              main="너무 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="블랙핑크"
              category="진짜 이쁘네 ㅋㅋ"
              main="제 이상형이에요 사귀자"
            />
          </SliderXItems>
        </SliderXwrapper>
        <Margin height="35" />
        <PopupTitle
          isarrow={true}
          text="독립 아티스트"
          bottomgap="20"
          onClick={() => navigate("/NewArtist")}
        />
        <ArtistCategory />
        <SliderXwrapper>
          <SliderXItems>
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="로제"
              category="이쁘다"
              main="진짜 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/iab_box.jpg"
              title="iab"
              category="이쁘다"
              main="너무 이쁘다"
            />
            <SmallCard
              image="img/Artistimg/rose.jpg"
              title="블랙핑크"
              category="진짜 이쁘네 ㅋㅋ"
              main="제 이상형이에요 사귀자"
            />
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
