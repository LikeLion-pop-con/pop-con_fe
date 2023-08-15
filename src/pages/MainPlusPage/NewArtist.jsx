import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import Card from "../../Components/Card/Card";
import * as api from "../../api";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

function NewArtist() {
  const [newbrandData, setNewbrandData] = useState([]);
  const getNewbrand = async () => {
    const newbrand = await api.getNewbrand();
    setNewbrandData(newbrand);
    console.log(newbrand);
  };
  const compareDate = (item) => {
    const arr = item?.brand_borndate.split("-");
    let sum;
    for (let i = 0; i < arr.length; ++i) {
      sum += parseInt(arr[i]);
    }
    return sum;
  };

  useEffect(() => {
    getNewbrand();
  }, []);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">새로운 독립 아티스트</Typo>
      </Title>
      <Margin height="20" />
      <PopupWrap>
        {newbrandData
          ?.filter((item) => item?.type === 2)
          ?.sort(function(a, b) {
            if (compareDate(a) > compareDate(b)) {
              return -1;
            } else {
              return 1;
            }
          })
          ?.map((item) => (
            <Card
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
export default NewArtist;
