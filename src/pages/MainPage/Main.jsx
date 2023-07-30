import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdSlider from "../../Components/AdSlider/AdSlider";
import Category from "../../Components/PopupCategory/PopupCategory";
import Margin from "../../Components/Margin/Margin";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Header left="logo" right={["login", "search"]} />
        <AdSlider />
        <Margin height="220" />
        <PopupTitle text="팝업 카테고리" />
        <Category />
        <Margin height="30" />
        
      </Wrapper>
    </>
  );
}

export default Main;
