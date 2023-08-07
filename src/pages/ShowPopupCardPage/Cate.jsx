import { useLocation, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PopupCategory } from "../../atom";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Header from "../../Components/Header/Header";
import PageTabs from "../../Components/PageTitle/PageTabs";
import back from "../../assets/Icons/NavigationBar/back.svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CateHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const CateTitle = styled.p`
  font-size: 20px;
  margin-top: 10px;
  padding: 0px 25px;
  font-weight: 600;
`;

function Cate() {
  const { cateId } = useParams(); // 1 2 3 4

  const state = useLocation();
  console.log(state);

  const popupcate = useRecoilValue(PopupCategory);

  console.log(cateId);

  function getCateImg(cateId) {
    if (cateId === 1) {
      return "img/cate1.png";
    } else if (cateId === 2) {
      return "img/cate2.png";
    } else if (cateId === 3) {
      return "img/cate3.png";
    } else if (cateId === 4) {
      return "img/cate4.png";
    }
  }

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <CateHead>
        <CateTitle>{popupcate[cateId - 1]}</CateTitle>
        <img
          style={{ marginTop: 5 }}
          alt="img"
          width="35"
          height="35"
          src={back}
        ></img>
      </CateHead>
      <PageTabs
        cateId={cateId}
        page1="진행 중인 팝업"
        page2="신청 중인 팝업"
        page1link={""}
        page2link={"/ing"}
      />
    </Wrapper>
  );
}
export default Cate;
