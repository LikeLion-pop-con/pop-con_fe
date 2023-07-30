import React, { useState } from 'react';
import styled from 'styled-components';
import searchLook from '../../assets/Icons/SearchBar/searchLook.svg';
import CircleX from '../../assets/Icons/SearchBar/CircleX.svg';

const SearchBarWrapper = styled.div`
  background-color: #E9E9E9;
  border-radius: 8px;
  width: 80%;
  height: 34px;
  display: flex;
  align-items: center;
  margin: 1.5%;
  position: relative; /* Add position: relative to the wrapper */
`;

const Input = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5% 3%;
  font-size: 14px;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  transform: translateY(-50%);
  cursor: pointer;
`;

const SearchIconWrapper = styled(IconWrapper)`
  right: 3.5%;
  top: 51%;
`;

const CancelIconWrapper = styled(IconWrapper)`
  right: 13%;
  top: 51%;
`;

const CancelText = styled.div`
  cursor: pointer;
  display: ${props => (props.hasText ? 'block' : 'none')};
`;

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText('');
  };

  const hasText = searchText.trim().length > 0;

  return (
    <SearchBarWrapper>
      <Input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChange={handleInputChange}
      />
      {hasText && (
        <CancelIconWrapper onClick={clearSearch}>
          <img src={CircleX} alt="Cancel" />
        </CancelIconWrapper>
      )}
      <SearchIconWrapper>
        <img src={searchLook} alt="Search" />
      </SearchIconWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
