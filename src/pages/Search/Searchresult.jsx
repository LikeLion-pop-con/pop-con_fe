import React from 'react';
import NavigationBar from '../../Components/Navigate/Navigate';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSearchContext } from "../../Components/SearchBar/SearchContext";
import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";
import LargeCard from '../../Components/Card/LargeCard';
import SmallCard from '../../Components/Card/SmallCard';
import SmallCardGH from "../../assets/Icons/Card/SmallCardGH.jpg";
import Card from '../../Components/Card/Card';
import Typo from '../../assets/Typo';
import Cardrose from "../../assets/Icons/Card/Cardrose.jpg";
const Wrapper = styled.div`
    display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 90%;
  height: auto;
`
const TitleText = styled.p`
    margin-top:20px;
    margin-bottom: 5px;
    text-align: left;
`
const Searchresult = () => {
    const location = useLocation();
    const searchText = new URLSearchParams(location.search).get('query');
    const { searchHistory, setSearchHistory } = useSearchContext();

  const addToHistory = (text) => {
    setSearchHistory((prevHistory) => [...prevHistory, text]);
  };

    return (
        <>
        <SearchBar onSearchTextChange={(text) => addToHistory(text)} searchText={searchText} searchHistory={searchHistory}></SearchBar>
        <TitleText><Typo size="1.2rem" weight="400" color = "main">팝업 스토어</Typo></TitleText>
        <Wrapper>
        <LargeCard image={NewJeans} title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G '} date='2023.07.21~2023.08.19'/>
        <LargeCard image={NewJeans} title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G '} date='2023.07.21~2023.08.19'/>
        
        </Wrapper>
        <TitleText><Typo size="1.2rem" weight="400" color = "main">팝업 브랜드</Typo></TitleText>
        <Wrapper>
        <SmallCard image={SmallCardGH} title='심금이가 좋다.' category='캐릭터 전시팝업' main={'체고다 멋지다. \n우리 심금이🫶🏻'}/>
        <SmallCard image={SmallCardGH} title='심금이가 좋다.' category='캐릭터 전시팝업' main={'체고다 멋지다. \n우리 심금이🫶🏻'}/>
        <SmallCard image={SmallCardGH} title='심금이가 좋다.' category='캐릭터 전시팝업' main={'체고다 멋지다. \n우리 심금이🫶🏻'}/>
        </Wrapper>
        <TitleText><Typo size="1.2rem" weight="400" color = "main">독립 아티스트</Typo></TitleText>
        <Wrapper>
        <Card image= {Cardrose} title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
        <Card image= {Cardrose} title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
        <Card image= {Cardrose} title='Rose' category='뮤직 아티스트' main={"그녀만의 색깔을 담고\n 있는 목소리"}/>
        </Wrapper>
        <NavigationBar/>
        </>
    );
};

export default Searchresult;