import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import Card from "../../Components/Card/Card";
import * as api from "../../api";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;
const Title = styled.div`
  width: 100%;
  padding-left: 1.5rem;
`;
const PopupWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
`;

function NewBrand() {
  const [newbrandData, setNewbrandData] = useState([]);
  const navigate = useNavigate();
  const getNewbrand = async () => {
    const newbrand = await api.getNewbrand();
    setNewbrandData(newbrand);
    console.log(newbrand);
  };
  useEffect(() => {
    getNewbrand();
  }, []);
  const compareDate = (item) => {
    const arr = item?.brand_borndate.split("-");
    let sum;
    for (let i = 0; i < arr.length; ++i) {
      sum += parseInt(arr[i]);
    }
    return sum;
  };

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">새로운 팝업 브랜드</Typo>
      </Title>
      <Margin height="20" />
      <PopupWrap>
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
            <Card
              onClick={() => navigate(`/brand/${item?.id}`)}
              image={"https://popcon.store" + item?.brand_logo}
              title={item?.brand_name}
              category={item?.brand_category}
              main={item?.brand_simple_intro}
            />
          ))}
      </PopupWrap>
    </Wrapper>
  );
}
export default NewBrand;
