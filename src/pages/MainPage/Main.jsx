import styled from "styled-components";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import PopupButton from "../../Components/PopupButton/PopupButton";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Horizon from "../../Components/Horizon/Horizon";
import Margin from "../../Components/Margin/Margin";

import Button from "../../Components/Button/Button";
import Headerline from "../../Components/Headerline/Headerline";
import SmallButton from "../../Components/Button/SmallButton";
import SliderX from "../../Components/WrapperX/SliderX";
import CircleButton from "../../Components/Button/CircleButton";
import Category from "../../Components/PopupCategory/PopupCategory";
import PageTabs from "../../Components/PageTitle/PageTabs";
import Logout from "../Login/Logout";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  const [activePage, setActivePage] = useState("inProgress");

  const handleTabClick = (page) => {
    setActivePage(page);
  };
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <PageTitle
          topTitle="팝업 스토어"
          inProgressLabel="진행 중인 팝업"
          appliedLabel="신청 중인 팝업"
          activePage={activePage}
          onTabClick={handleTabClick}
        ></PageTitle>
        {activePage === "inProgress" &&
          -(<p>여기는 진행 중인 팝업 컨텐츠입니다. aaaaaaaaaaaaaaaaaaaaaaa</p>)}
        {activePage === "applied" && (
          <p>여기는 신청 중인 팝업 컨텐츠입니다. bbbbbbbbbbbbbbbbbbbbbbbb</p>
        )}
        <p>Hi my name is jun</p>
        {/* <Footer></Footer> */}
        <Margin height="5" />
        <p>Hi my name is jo</p>
        <Margin height="10" />
        <Horizon width="50%" color="green" />
        <Button width="50%"></Button>
        <SliderX></SliderX>
        <Category />
        <PageTabs />
      </Wrapper>
    </>
  );
};

export default Main;
