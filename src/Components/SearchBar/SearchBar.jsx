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
  
  const hasText = searchText.trim().length > 0;

  const searchBarStyle = {
    backgroundColor: '#E9E9E9',
    borderRadius: '8px',
    width: '80%',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    margin: '7px'
  };

  const inputStyle = {
    width: '100%',
    height: '25px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    padding: '5px 10px',
    fontSize: '14px',
  };

  const iconStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const searchIconStyle = {
    ...iconStyle,
    right: '10px',
    top: '20px'
  };

  const cancelIconStyle = {
    ...iconStyle,
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
