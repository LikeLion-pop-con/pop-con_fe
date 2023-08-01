import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Header from "../../Components/Header/Header";
import PageTabs from "../../Components/PageTitle/PageTabs";
import { useRecoilValue } from "recoil";
import { PopupCategory } from "../../atom";

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
  padding-right: 5px;
  font-weight: 600;
`;

function Cate() {
  const { cateId } = useParams();

  const popupcate = useRecoilValue(PopupCategory);

  console.log(cateId);

  //   useEffect(() => {
  //     axios.get();
  //   });

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
          src={`img/cate${cateId}.png`}
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
