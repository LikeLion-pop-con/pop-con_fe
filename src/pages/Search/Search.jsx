import styled from "styled-components";
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Typo from "../../assets/Typo";
import Header from "../../Components/Header/Header";
import Margin from "../../Components/Margin/Margin";
import NavigationBar from "../../Components/Navigate/Navigate";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 38px;
`;

const Search = () => {
  const navigate = useNavigate();
  return (
    <>
    <Wrapper>
      <SearchBar/>
      <Margin height="10"/>
      <Typo color="green" height="10px" size="2rem" weight="bold">검색 화면</Typo>
      <Margin height="10"/>
      <p>검색 목록 띄울 예정</p>
      <NavigationBar/>
    </Wrapper>
    </>
  );
};

export default Search;