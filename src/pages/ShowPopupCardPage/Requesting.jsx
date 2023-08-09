import { useLocation, useOutletContext } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";
import { useEffect } from "react";
import * as api from "../../api";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

function Requesting() {
  const params = useOutletContext();

  const { state } = useLocation();

  console.log(state);

  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await api.getMainCategory(params.cateId);
    console.log(data);
    if (state) {
      data.filter((item) => item);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Margin height="20" />
      <PopupTitle text="지금 팝업을 예매해보세요!" />
      {data?.map((item) => (
        <LargeCard
          image={"https://popcon.store" + item?.popup_image}
          title={item?.popup_info}
        />
      ))}
    </Wrapper>
  );
}
export default Requesting;
