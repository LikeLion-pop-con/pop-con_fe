import { useOutletContext } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";
import * as api from "../../api";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

function BrandInfo() {
  const params = useOutletContext();
  const { brandId } = params;
  const [data, setData] = useState([]);
  console.log(brandId);
  const navigate = useNavigate();
  const getBrandPopup = async () => {
    const list = await api.getBrandinfoPopup(brandId);

    console.log(list);
    setData(list);
  };
  useEffect(() => {
    getBrandPopup();
  }, []);

  const getDetail = (category) => {
    if (category === 1) {
      return "푸드";
    } else if (category === 2) {
      return "패션 잡화";
    } else if (category === 3) {
      return "테크 가전";
    } else if (category === 4) {
      return "뷰티";
    }
  };

  return (
    <Wrapper>
      <Margin height="20" />
      <PopupTitle text="팝업 정보" />
      {data?.map((item) => (
        <LargeCard
          onClick={() => navigate(`/popupInfo/?id=${item.id}`)}
          image={"https://popcon.store" + item?.popup_main_image}
          title={item?.popup_name}
          space={item?.popup_detailplace}
          date={item?.popup_date}
          popcategory={item?.popup_category}
          detail={"뷰티"}
        />
      ))}
    </Wrapper>
  );
}
export default BrandInfo;
