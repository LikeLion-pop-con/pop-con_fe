import styled from "styled-components";
import { Navigate, useNavigate } from 'react-router-dom';
import Typo from "../../assets/Typo";
import Header from "../../Components/Header/Header";
import Margin from "../../Components/Margin/Margin";
import NavigationBar from "../../Components/Navigate/Navigate";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useState } from "react";
import { useSearchContext } from "../../Components/SearchBar/SearchContext"
import Horizon from "../../Components/Horizon/Horizon";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 38px;
`;
const Resentbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
`
const ResentText = styled.p`
`
const DeleteText = styled.button`
  border:none;
  background-color: transparent;
  color: gray;
  padding: 2px;
`
const Reset = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 80%;
  flex-grow: 1;
  height: 30px;
`

const ResetText = styled.div`
  height: 20px;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin: 5px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
`
const ManySearch = styled.p`
  align-self:flex-start;
  margin-left: 70px;
  margin-top : 20px;
  label{
    color:#EC7538;
  }
`
const POPbox = styled.div`
    display: flex;
    flex-direction: row;
    height: 200px;

`
const POPbox1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    margin: 40px;
`
const PoPRANK = styled.div`
  padding: 10px;
  padding-right: 30px;
`
const Search = () => {
  const { searchHistory, setSearchHistory } = useSearchContext();

  const addToHistory = (text) => {
    setSearchHistory((prevHistory) => [...prevHistory, text]);
  };
  const clearHistory = () => {
    setSearchHistory([]);
  };
  
  const navigate = useNavigate();
  return (
    <>
    <Wrapper>
      <SearchBar onSearchTextChange={(text) => addToHistory(text)}
          searchHistory={searchHistory}/>
      <Margin height="10"/>
      <Margin height="10"/>
      <Resentbox>
        <ResentText><Typo color="black" size="1.2rem" weight="400">최근 검색어</Typo></ResentText>
        <DeleteText onClick={clearHistory}>모두지우기</DeleteText>
      </Resentbox>
      <Reset>
      {searchHistory.map((text, index) => (
            <Typo color="black" size="0.7rem"><ResetText key={index}>{text}</ResetText></Typo>
          ))}
          
      </Reset>
        <ManySearch><Typo color="black" size="1.1rem">지금 많이 찾는 <label>팝업스토어</label></Typo></ManySearch>
        <Margin height="20"/>
        <PoPRANK><Typo color="black" size="1.2rem">1</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
        </PoPRANK>
        <PoPRANK><Typo color="black" size="1.2rem">2</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
        </PoPRANK>
        <PoPRANK><Typo color="black" size="1.2rem">3</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
        </PoPRANK>
        <PoPRANK><Typo color="black" size="1.2rem">4</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
        </PoPRANK>
        <PoPRANK><Typo color="black" size="1.2rem">5</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
        </PoPRANK>
        <ManySearch><Typo color="black" size="1.1rem">지금 많이 찾는 <label>팝업브랜드</label></Typo></ManySearch>
        <POPbox>
          <POPbox1>
          <PoPRANK><Typo color="black" size="1.2rem">1. 뉴발란스</Typo></PoPRANK>
          <PoPRANK><Typo color="black" size="1.2rem">2. 뉴발란스</Typo></PoPRANK>
          <PoPRANK><Typo color="black" size="1.2rem">3. 뉴발란스</Typo></PoPRANK>
          <PoPRANK><Typo color="black" size="1.2rem">4. 뉴발란스</Typo></PoPRANK>
          <PoPRANK><Typo color="black" size="1.2rem">5. 뉴발란스</Typo></PoPRANK>
          </POPbox1>
          <POPbox1>
          <PoPRANK><Typo color="black" size="1.2rem">6. 뉴발란스</Typo></PoPRANK>
          <PoPRANK><Typo color="black" size="1.2rem">7. 뉴발란스</Typo></PoPRANK>
          <PoPRANK><Typo color="black" size="1.2rem">8. 뉴발란스</Typo></PoPRANK>
          <PoPRANK><Typo color="black" size="1.2rem">9. 뉴발란스</Typo></PoPRANK>
          <PoPRANK><Typo color="black" size="1.2rem">10. 뉴발란스</Typo></PoPRANK>
          </POPbox1>
        </POPbox>
    </Wrapper>
    <NavigationBar/>
    </>
  );
};

export default Search;