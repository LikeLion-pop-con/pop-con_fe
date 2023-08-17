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
import cate1 from "../../assets/Icons/Cate/cate1.png";
import cate2 from "../../assets/Icons/Cate/cate2.png";
import cate3 from "../../assets/Icons/Cate/cate3.png";
import cate4 from "../../assets/Icons/Cate/cate4.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
  padding-right: 10px;
  font-weight: 600;
`;

function Cate() {
  const { cateId } = useParams(); // 1 2 3 4

  const state = useLocation();
  console.log(state);

  const popupcate = useRecoilValue(PopupCategory);

  console.log(cateId);

  function getCateImg(cateId) {
    if (parseInt(cateId) === 1) {
      return cate1;
    } else if (parseInt(cateId) === 2) {
      return cate2;
    } else if (parseInt(cateId) === 3) {
      return cate3;
    } else if (parseInt(cateId) === 4) {
      return cate4;
    }
  }

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <CateHead>
        <CateTitle>{popupcate[cateId - 1]}</CateTitle>
        <img
          src={getCateImg(cateId)}
          style={{ marginTop: 5 }}
          alt="img"
          width="35"
          height="35"
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
