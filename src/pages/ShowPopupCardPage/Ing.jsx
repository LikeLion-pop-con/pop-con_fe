import { useNavigate, useOutletContext } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";
import { useEffect, useState } from "react";
import * as api from "../../api";
import NavigationBar from "../../Components/Navigate/Navigate";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  place-items: center;
  place-content: center;
`;

function Ing() {
  const params = useOutletContext();

  const navigate = useNavigate();
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
          onClick={() => navigate(`/popupinfo/?id=${item?.id}`)}
          image={"https://popcon.store" + item?.popup_image01}
          title={item?.popup_name}
          date={item?.popup_date}
          space={item?.popup_detailplace}
          popcategory={item?.popup_category}
        />
      ))}
      <Margin height="30" />
      <NavigationBar />
    </Wrapper>
  );
}
export default Ing;
