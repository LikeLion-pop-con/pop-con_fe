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
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();
  const [Checkbrand, setCheckbrand] = useState();
  useEffect(() => {
    getCheckbrandsub();
    getBrandinfo();
  }, []);
  useEffect(() => {
    console.log(Checkbrand);
  }, [Checkbrand]);

  const getCheckbrandsub = async () => {
    const checkbrand = await api.getCheckbrandsub(user_pk, brandId);
    setCheckbrand(checkbrand);
  };

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

  const handleSubscribeChange = (newIsSubscribed) => {
    console.log("구독 상태 변경:", newIsSubscribed);
    setIsSubscribed(newIsSubscribed); // 구독 상태 업데이트

    api
      .postBrandsubscribe(brandId, user_pk)
      .then((responseData) => {
        console.log("응답 데이터:", responseData);
      })
      .catch((error) => {
        console.error("오류:", error);
      });
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
        subcribeNum={Data.brand_subcounts}
        popNum={Data.brand_like_people}
        introduceText={Data.brand_simple_intro}
        subscribed={Checkbrand?.subscribe_state === 1} // 구독 중이면 true
        onSubscribe={handleSubscribeChange}
      ></Carddown1>
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
