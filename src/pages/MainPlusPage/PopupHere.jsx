import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import LargeCard from "../../Components/Card/LargeCard";
import Footer from "../../Components/Footer/Footer";
import { useState,useEffect } from "react";
import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";
import * as api from "../../api";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  padding-left: 1.5rem;
`;

const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`;

function PopupHere() {
  const [newbrandData, setNewbrandData] = useState([]);
  const navigate = useNavigate();
  const getNewbrand = async () => {
    const newbrand = await api.getPopupwill();
    setNewbrandData(newbrand);
    console.log(newbrand);
  };
  useEffect(() => {
    getNewbrand();
  }, []);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">📍 여기에 열어주세요!</Typo>
      </Title>
      <Margin height="20" />
      <CardBlock>
      {newbrandData?.map((item) => (
              <LargeCard
                onClick={() => navigate(`/popupInfo/?id=${item.id}`)}
                image={"https://popcon.store" + item?.popup_image01}
                title={item?.popup_name}
                popcategory={item?.popup_category}
                detail={item?.brand_info}
                space={item?.popup_detailplace}
                date={item?.popup_date}
              />
            ))}
      </CardBlock>
      <Footer />
    </Wrapper>
  );
}
export default PopupHere;
