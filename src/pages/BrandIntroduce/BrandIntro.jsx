import { useNavigate, useOutletContext } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../../api";
import { BsTextWrap } from "react-icons/bs";
import Typo from "../../assets/Typo";
import { useRecoilValue } from "recoil";
import { isBrandOrArtist } from "../../atom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
const AboutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  background-color: #ec7538;
  border: none;
  width: 60%;
  height: 40px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;
const Img = styled.img`
  width: 90%;
  height: 250px;
  border-radius: 20px;
`;
const TextWrap = styled.div`
  width: 90%;
`;
function BrandIntro() {
  const params = useOutletContext();
  const { brandId } = params;
  console.log(brandId);

  const [data, setData] = useState([]);
  const isBrand = useRecoilValue(isBrandOrArtist);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {
    getBrandinfo();
  }, []);
  const getBrandinfo = async () => {
    const BrandData = await api.getBrandinfo(brandId);
    setData(BrandData);
    console.log(BrandData);
  };
  return (
    <Wrapper>
      <Margin height="20" />
      <Img src={"https://popcon.store" + data?.brand_detail_image}></Img>
      <Margin height="30" />
      <PopupTitle
        text={isBrand ? "브랜드 소개" : "아티스트 소개"}
        bottomgap="20"
      />
      <TextWrap>
        <Typo style={{ lineHeight: 1.2 }}>{data?.brand_intro}</Typo>
      </TextWrap>
      <Margin height="30" />
    </Wrapper>
  );
}
export default BrandIntro;
