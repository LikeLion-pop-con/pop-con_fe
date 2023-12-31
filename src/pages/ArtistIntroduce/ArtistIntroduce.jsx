import React from "react";
import styled from "styled-components";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown1 from "../../Components/Brand, ArtistCard/Carddown1";
import InfoTabs from "../../Components/PageTitle/InfoTabs2";
import Header from "../../Components/Header/Header";
import Headerline from "../../Components/Headerline/Headerline";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PopupCategory } from "../../atom";
import { useState,useEffect } from "react";
import * as api from "../../api";
import style from 'styled-components';
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 30px;
`
const StyledLink = styled.div`
  width: 200px;
  display: flex;
  border: 1px solid lightgray;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-weight: lighter;
`
const ArtistIntroduce = () => {
  const [Data, setData] = useState([]);
  const { brandId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getBrandinfo();
  }, []);
  const getBrandinfo = async () => {
    const BrandData = await api.getBrandinfo(brandId);
    setData(BrandData);
    console.log(BrandData);
  };
  const navigateToExternalLink = () => {
    const externalLink = (Data.brand_about_link);
    window.open(externalLink, '_blank');
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
      ></Carddown1>
      <InfoTabs
        artistId={brandId}
        page1="소개"
        page2="팝업 정보"
        page3="포스트"
        page1link={"brand/:brandId"}
        page2link={"brand/:brandId"}
        page3link={"brand/:brandId"}
        />
      <Headerline title={Data.brand_name} subtitle={Data.brand_borndate} content={Data.brand_intro}/>
      <Box><StyledLink onClick={navigateToExternalLink}>ABOUT</StyledLink></Box>
    </div>
  );
};

export default ArtistIntroduce;
