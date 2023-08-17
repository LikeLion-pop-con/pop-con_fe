import React from "react";
import styled from "styled-components";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown1 from "../../Components/Brand, ArtistCard/Carddown1";
import InfoTabs from "../../Components/PageTitle/InfoTabs";
import Header from "../../Components/Header/Header";
import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../api";
import Headerline from "../../Components/Headerline/Headerline";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isBrandOrArtist } from "../../atom";
import KakaoShare from "../../Components/Kakao/KakaoShare";
const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 30px;
`;

const BrandIntroduce = () => {
  const { brandId } = useParams();
  const [Data, setData] = useState([]);
  const setIsBrandOrArtist = useSetRecoilState(isBrandOrArtist);
  const user_pk = localStorage.getItem("Pk");
  const navigate = useNavigate();
  const [Checkbrand, setCheckbrand] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [isUserLiked, setIsUserLiked] = useState(false);
  const [Brandpop, setBrandpop] = useState([]);
  const [isshared, setIsShared] = useState(false);
  
  useEffect(() => {
    getBrandinfo();
    getBrandPopup();
  }, []);

  const getBrandinfo = async () => {
    const BrandData = await api.getBrandinfo(brandId);
    if (BrandData?.type === 1) {
      setIsBrandOrArtist(true); // 기업
    } else {
      setIsBrandOrArtist(false); // 아티스트
    }

    setData(BrandData);
    console.log(BrandData);
  };

  const getBrandPopup = async () => {
    const list = await api.getBrandinfoPopup(brandId);

    console.log(list);
    setBrandpop(list);
  };
  return (
    <div>
      <Header left="logo" right={["login", "search"]} />
      <Cardup
        name={Data.brand_name}
        backimageUrl={"https://popcon.store" + Data.brand_main_image} //이미지 크기가 안 맞아서
        CircleimageUrl={"https://popcon.store" + Data.brand_logo}
      ></Cardup>
      <Carddown1
      id={brandId}
        subcribeNum={Data.brand_subcounts}
        popNum={Brandpop.length} 
        introduceText={Data.brand_simple_intro}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        setIsShared={setIsShared} 
      ></Carddown1>
      {isshared && (
        <KakaoShare
          title={Data.brand_name}
          info={Data.brand_simple_intro}
          image={"https://popcon.store" + Data.brand_main_image}
        />
      )}
      <InfoTabs
        brandId={brandId} // cateId 변수명을 brandId로 수정
        page1="소개"
        page2="팝업 정보"
        page3="포스트"
      />
    </div>
  );
};

export default BrandIntroduce;
