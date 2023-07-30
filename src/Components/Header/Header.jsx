import logo from '../../assets/Icons/Header/logo.svg'
import login from '../../assets/Icons/Header/login.svg'
import search from '../../assets/Icons/Header/search.svg'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다 
`;

const iconType = (navigate, type) => {
  const icon = {
    logo: <Icon src={logo} alt='logo' onClick={() => navigate('/')} />,
    login: <Icon src={login} alt='login' onClick={() => navigate('/login')} />,
    search: <Icon src={search} alt='search' onClick={() => navigate('/search')} />,
  };

  return icon[type];
};

const HeaderWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconsContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

const EmptyIcon = styled.div`
  width: 16px;
  height: 16px;
`;

export default function Header({ left = "", right = [] }) {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
          <IconsContainer>
            {left ? iconType(navigate, left) : <EmptyIcon />}
          </IconsContainer>
          <IconWrapper>
            {right.map((iconTypeItem) => (
              iconTypeItem ? iconType(navigate, iconTypeItem) : <EmptyIcon />))}
          </IconWrapper>
      </HeaderWrapper>
    </>
  );
}
