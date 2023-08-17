import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;
const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 5%;
  margin-bottom: 30px;
`;
const Tab = styled.div`
  width: 6rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin: 0px 10px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.sub : props.theme.colors.white};
  border: ${(props) => (props.active ? "none" : "1px solid rgba(0,0,0,0.15)")};
  a {
    color: ${(props) =>
      props.active ? props.theme.colors.white : props.theme.colors.black};
  }
  cursor: pointer;
`;

function ArtistCategory({ handleCategoryClick }) {
  const [activeTab, setActiveTab] = useState("/"); // 기본 선택 탭을 지정

  const handleClick = (path) => {
    setActiveTab(path);
    handleCategoryClick(path); // 다른 작업 수행
  };

  return (
    <Wrapper>
      <Tabs>
        <Tab active={activeTab === "/"} onClick={() => handleClick("/")}>
          <a>전체</a>
        </Tab>
        <Tab active={activeTab === "/art"} onClick={() => handleClick("/art")}>
          <a>그림</a>
        </Tab>
        <Tab active={activeTab === "/lit"} onClick={() => handleClick("/lit")}>
          <a>문학</a>
        </Tab>
        <Tab
          active={activeTab === "/video"}
          onClick={() => handleClick("/video")}
        >
          <a>영상</a>
        </Tab>
        <Tab
          active={activeTab === "/music"}
          onClick={() => handleClick("/music")}
        >
          <a>음악</a>
        </Tab>
      </Tabs>
    </Wrapper>
  );
}

export default ArtistCategory;
