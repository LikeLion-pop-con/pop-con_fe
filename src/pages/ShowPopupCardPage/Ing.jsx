import { useOutletContext } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";
import { useEffect, useState } from "react";
import * as api from "../../api";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

function Ing() {
  const params = useOutletContext();

  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await api.getMainCategoryIng(params.cateId);
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Margin height="20" />
      <PopupTitle text="팝업이 열릴 위치를 정해주실래요?" />
      {data?.map((item) => (
        <LargeCard
          image={"https://popcon.store" + item?.popup_image}
          title={item?.popup_info}
        />
      ))}
    </Wrapper>
  );
}
export default Ing;
