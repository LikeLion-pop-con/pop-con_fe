import styled from "styled-components";
import { Navigate, useNavigate } from 'react-router-dom';
import Typo from "../../assets/Typo";
import Header from "../../Components/Header/Header";
import Margin from "../../Components/Margin/Margin";
import NavigationBar from "../../Components/Navigate/Navigate";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { useSearchContext } from "../../Components/SearchBar/SearchContext"
import Horizon from "../../Components/Horizon/Horizon";
import { Link } from "react-router-dom";
import * as api from "../../api";
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
  const [Hotppop, setHotppop] = useState([]);
  const addToHistory = (text) => {
    setSearchHistory((prevHistory) => [...prevHistory, text]);
  };
  const clearHistory = () => {
    setSearchHistory([]);
  };
  const handleSearchTextClick = (text) => {
    addToHistory(text);
    setSearchHistory((prevHistory) => [...prevHistory, text]);
    navigate(`/search/result?query=${encodeURIComponent(text)}`);
  };
  const navigate = useNavigate();
  
  useEffect(() => {
    getMainHotPopup();
  }, []);

  const getMainHotPopup = async () => {
    const Hotppop = await api.getMainHotPopup();
    setHotppop(Hotppop);
    console.log(Hotppop);
  };
  return (
    <>
    {Hotppop.length > 0 && (
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
            <Typo color="black" size="0.7rem"><ResetText onClick={() => handleSearchTextClick(text)}>{text}</ResetText></Typo>
          ))}
          
      </Reset>
        <ManySearch><Typo color="black" size="1.1rem">지금 많이 찾는 <label>팝업스토어</label></Typo></ManySearch>
        <Margin height="20"/>
        <PoPRANK>
           <Link to={`/popupInfo/?id=${Hotppop[0].id}`}><Typo color="black" size="1.2rem">1. {Hotppop[0].popup_name}</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
          </Link>
        </PoPRANK>
        <PoPRANK>
        <Link to={`/popupInfo/?id=${Hotppop[1].id}`}>
          <Typo color="black" size="1.2rem">2. {Hotppop[1].popup_name}</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
          </Link>
        </PoPRANK>
        <PoPRANK>
        <Link to={`/popupInfo/?id=${Hotppop[2].id}`}>
          <Typo color="black" size="1.2rem">3. {Hotppop[2].popup_name}</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
          </Link>
        </PoPRANK>
        <PoPRANK>
        <Link to={`/popupInfo/?id=${Hotppop[3].id}`}>
          <Typo color="black" size="1.2rem">4. {Hotppop[3].popup_name}</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
          </Link>
        </PoPRANK>
        <PoPRANK>
        <Link to={`/popupInfo/?id=${Hotppop[4].id}`}>
          <Typo color="black" size="1.2rem">5. {Hotppop[4].popup_name}</Typo>
          <Margin height="10"/>
          <Horizon width="350px" color="#EBEBEB" />
          </Link>
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
    )} 
    
    <NavigationBar/>
    </>
  );
};

export default Search;