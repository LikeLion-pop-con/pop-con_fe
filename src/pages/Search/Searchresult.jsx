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
import { useState, useEffect } from 'react';
import * as api from "../../api";
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
    display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 90%;
  height: auto;
  margin-top: 20px;
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
    const [SearchData, setSearchData] = useState([]);
    const navigate = useNavigate();
    let smallCardRendered = false;
  const addToHistory = (text) => {
    setSearchHistory((prevHistory) => [...prevHistory, text]);
  };
  useEffect(() => {
    getSearch();
  }, [searchText]);

  const getSearch = async () => {
    const search = await api.getSearch(searchText);
    setSearchData(search);
    console.log(search);
  };

  console.log(SearchData);
    return (
        <>
        <SearchBar onSearchTextChange={(text) => addToHistory(text)} searchText={searchText} searchHistory={searchHistory}></SearchBar>
        {SearchData.brands &&
        <TitleText><Typo size="1.2rem" weight="400" color = "main">팝업 스토어</Typo></TitleText>}
        <Wrapper>
        {SearchData.popups && SearchData.popups.map((popup, index) => ( 
        <LargeCard key={index} image={"https://popcon.store" + popup?.popup_image01} title={popup.popup_name} popcategory={popup.category} detail={popup.simple_info} space={popup.popup_detailplace} date={popup.popup_opendate} onClick={() => navigate(`/Popupbooking/${popup.id}`)}/>
        ))}
        </Wrapper>
        {SearchData.brands && SearchData.brands.some(brand => brand.type === 1) && (
        <TitleText><Typo size="1.2rem" weight="400" color = "main">팝업 브랜드</Typo></TitleText>)}
        <Wrapper>
            {SearchData.brands && SearchData.brands.map((brand, index) => {
                if (brand.type === 1) {
                    if (!smallCardRendered) {
                        smallCardRendered = true; // smallCard 렌더링 표시
                        return (
                            <React.Fragment key={index}>
                                <SmallCard image={"https://popcon.store" + brand?.brand_logo} title={brand.brand_name} category={brand.brand_category} main={brand.brand_simple_intro} onClick={() => navigate(`/brand/${brand.id}`)}/>
                            </React.Fragment>
                        );
                    }
                } else
                return null; // 다른 경우에는 아무것도 렌더링하지 않음
            })}
            {/* "독립 아티스트" 영역은 여기에 추가할 수 있습니다. */}
        </Wrapper>
        {SearchData.brands && SearchData.brands.some(brand => brand.type === 2) && (
        <TitleText><Typo size="1.2rem" weight="400" color="main">독립 아티스트</Typo></TitleText>)}
        <Wrapper>
            {SearchData.brands && SearchData.brands.map((brand, index) => {
             if (brand.type === 2) {
                    return (
                        <Card key={index} image={"https://popcon.store" + brand?.brand_logo} title={brand.brand_name} category={brand.brand_category} main={brand.brand_simple_intro} onClick={() => navigate(`/artist/${brand.id}`)}/>
                    );
                }
                return null; // 다른 경우에는 아무것도 렌더링하지 않음
            })}
        </Wrapper>
        <NavigationBar/>
        </>
    );
};

export default Searchresult;