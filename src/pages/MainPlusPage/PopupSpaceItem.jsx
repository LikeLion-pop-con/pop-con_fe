import React from "react";
import styled from "styled-components";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown1 from "../../Components/Brand, ArtistCard/Carddown1";
import InfoTabs from "../../Components/PageTitle/InfoTabs";
import Header from "../../Components/Header/Header";
import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AdminCardimg from "../../assets/Icons/Card/NewJeans.jpg";
import Margin from "../../Components/Margin/Margin";
import * as api from "../../api";
import Carddown3 from "../../Components/Brand, ArtistCard/Carddown3";
const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1.5rem 0;
  width: 90%;
`;
const Tab = styled.div`
  width: 90%;
  padding: 1rem 0;
  position: relative;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  a {
    font-size: px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${(props) =>
      props.match ? props.theme.colors.main : props.theme.colors.black};
    opacity: ${(props) => (props.match ? 1 : 0.5)};
  }
`;
const StatusBar = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.theme.colors.main};
  width: 80%;
  height: 2px;
  bottom: 0;
`;

const BrandIntroduce = () => {
  const { spaceId } = useParams();
  const [placepopup, setplacepopup] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const isMatch = useMatch(`/popupspace/${spaceId}`);
  const isInfoMatch = useMatch(`/popupspace/${spaceId}/info`);

  console.log(spaceId);
  const getData = async () => {
    const placepopup = await api.getPopplaceinfo(spaceId);
    setplacepopup(placepopup);
    console.log(placepopup);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="20" />
      <Cardup
        name={placepopup.popup_place_title}
        backimageUrl={"https://popcon.store" + placepopup.popup_place_image01} //이미지 크기가 안 맞아서
        isSpace={true}
      ></Cardup>
      <Carddown3
        id={spaceId}
        subcribeNum={placepopup.popup_place_like}
        popNum={placepopup.popup_place_like_people}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        showButton1={true}
      ></Carddown3>
      <TabsContainer>
        <Tabs>
          <Tab match={isMatch !== null}>
            <Link to="">소개</Link>
            {isMatch && <StatusBar layoutId="bar" />}
          </Tab>
          <Tab match={isInfoMatch !== null}>
            <Link to="info">팝업 정보</Link>
            {isInfoMatch && <StatusBar layoutId="bar" />}
          </Tab>
        </Tabs>
      </TabsContainer>
      <Outlet
        context={{
          spaceId,
        }}
      />
    </Wrapper>
  );
};

export default BrandIntroduce;
