import { useNavigate, useOutletContext } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import * as api from "../../api";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
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
const Img = styled.div`
  width: 80%;
  height: 200px;
`
function BrandIntro() {
  const params = useOutletContext();
  console.log(params.cateId);
  const { brandId } = useParams();
  const [Data, setData] = useState([]);
  const navigate = useNavigate();
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
      <PopupTitle text="브랜드 소개" />
      <LargeCard image={"https://popcon.store" + Data.brand_detail_image} />
      <Margin height="30" />
    </Wrapper>
  );
}
export default BrandIntro;
