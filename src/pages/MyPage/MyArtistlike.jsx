import React from 'react';
import Header from '../../Components/Header/Header';
import styled from 'styled-components';
import Typo from '../../assets/Typo';
import Horizon from '../../Components/Horizon/Horizon';
import Card from '../../Components/Card/Card';
import NavigationBar from '../../Components/Navigate/Navigate';
import Margin from '../../Components/Margin/Margin';
import * as api from "../../api";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SmallCard from '../../Components/Card/SmallCard';
const Title = styled.div`
    margin: 5%;
`

const Wrapper = styled.div`
    margin: 20px;
`
const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`   

const MyArtistLike = () => {
  const user_pk = localStorage.getItem("Pk");
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const getSubBrand = async () => {
  const BrandData = await api.getSubBrand(user_pk);
  setData(BrandData);
  console.log(BrandData);
};
useEffect(() => {
  getSubBrand();
}, []);
const filteredData = Data.filter(item => item.type === 2);
    return (
        <>
          <Header left="logo" right={["login", "search"]} bgColor="#EC7538"/>
          <Title><Typo size="1.3rem" weight="400">구독 아티스트</Typo></Title>
          <Horizon width="350px" ></Horizon>
          <Margin height='20'/>

            <CardBlock>
            {filteredData.map((item, index) => (
          <SmallCard
            key={index}
            onClick={() => navigate(`/brand/${item?.id}`)}
            image={"https://popcon.store" + item?.brand_logo} // 이미지 경로
            title={item.brand_name} // 브랜드 이름 등 데이터 사용
            category={item.brand_category} // 브랜드 카테고리 등 데이터 사용
            main={item.brand_simple_intro} // 브랜드 메인 문구 등 데이터 사용
          />
        ))}
            </CardBlock>
          <NavigationBar/>
        </>
    );
};

export default MyArtistLike;