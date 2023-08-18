import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import LargeCard from "../../Components/Card/LargeCard";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../api";
import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const Title = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  display: inline-flex;
`;

const CustomTypo = styled(Typo)`
  color: #ec7538;
`;

const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  white-space: pre-line; // \n를 css에 적용시키려면 필요한 코드
`;

function PopularPopup() {
  const [hotpopupdata, setHotpopupdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const hotpopup = await api.getMainHotPopup();
    setHotpopupdata(hotpopup);
    console.log(hotpopup);
  };
  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <CustomTypo fontType="large">예매</CustomTypo>
        <div>&nbsp;</div>
        <Typo fontType="large">가능한 인기 팝업</Typo>
      </Title>
      <Margin height="20" />
      <CardBlock>
        {hotpopupdata?.map((item) => (
          <LargeCard
            onClick={() => navigate(`/popupInfo/?id=${item.id}`)}
            image={"https://popcon.store" + item?.popup_image01}
            title={item?.popup_name}
            popcategory={item?.popup_category}
            detail={item?.brand_info}
            space={item?.popup_detailplace}
            date={`${item?.popup_date}~${item?.popup_closedate}`}
          />
        ))}
      </CardBlock>
      <Footer />
    </Wrapper>
  );
}
export default PopularPopup;
