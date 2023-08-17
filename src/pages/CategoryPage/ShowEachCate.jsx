import { useLocation, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PopupCategory, brandCateImg } from "../../atom";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import * as api from "../../api";
import Card from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const CateHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
`;
const CateTitle = styled.p`
  font-size: 20px;
  margin-top: 10px;
  padding: 0px 25px;
  padding-right: 10px;
  font-weight: 600;
`;
const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
`;

function ShowEachCate() {
  const { brandId } = useParams(); // 1 2 3 4
  console.log(brandId);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { title } = state;
  console.log(state);

  const [data, setData] = useState([]);

  const getData = async () => {
    const list = await api.getBrandCategory(brandId);
    setData(list);

    console.log(list);
  };

  useEffect(() => {
    getData();
  }, []);

  const imgs = useRecoilValue(brandCateImg);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <CateHead>
        <CateTitle>{title}</CateTitle>
        <img
          src={imgs[brandId - 1]}
          style={{ marginTop: 5 }}
          alt="img"
          width="35"
          height="35"
        ></img>
      </CateHead>
      <CardWrap>
        {data?.map((item) => (
          <Card
            onClick={() => navigate(`/brand/${item?.id}`)}
            image={"https://popcon.store" + item?.brand_logo}
            title={item?.brand_name}
            category={item?.brand_category}
            main={item?.brand_simple_intro}
          />
        ))}
      </CardWrap>
    </Wrapper>
  );
}
export default ShowEachCate;
