import searchLook from '../../assets/Icons/SearchBar/searchLook.svg'
import CircleX from '../../assets/Icons/SearchBar/CircleX.svg'
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText('');
  };

  const hasText = searchText.trim().length > 0; //trim()는 문자열의 앞과 뒤의 공백을 제거 

  const searchBarStyle = {
    backgroundColor: '#E9E9E9',
    borderRadius: '8px',
    width: '80%',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    margin: '7px'
  };

  const inputStyle = {
    width: '100%',
    height: '25px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    padding: '5px 10px', //상하, 좌우 여백 
    fontSize: '14px',
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)', //요소를 수직 방향으로 이동, -50% (자기 자신 높이의 50% 위로 이동)
    cursor: 'pointer', //마우스 커서를 올려놓을 때 손바닥 모양으로 변경 
  };

  const searchIconStyle = {
    ...iconStyle, // icon 스타일 속성 상속 
    right: '10px',
    top: '20px'
  };

  const cancelIconStyle = {
    ...iconStyle, // icon 스타일 속성 상속 
    right: '38px',
    top: '18px'
  };

  const cancelTextStyle = {
    cursor: 'pointer',
    marginLeft: '10px',
    display: hasText ? 'block' : 'none',
  };

  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        style={inputStyle}
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChange={handleInputChange}
      />
      {hasText && (
      <div style={cancelIconStyle} onClick={clearSearch}>
        <img src={CircleX} alt="Cancel" />
      </div>
      )}
      <div style={searchIconStyle}>
        <img src={searchLook} alt="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
