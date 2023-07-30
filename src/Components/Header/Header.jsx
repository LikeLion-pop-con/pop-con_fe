import logo from '../../assets/Icons/Header/logo.png'
import login from '../../assets/Icons/Header/login.svg'
import search from '../../assets/Icons/Header/search.svg'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다 
`;

const iconType = (navigate, type) => {
  const icon = {
    logo: <Icon src={logo} alt='logo' width='23%' onClick={() => navigate('/')} />,
    login: <Icon src={login} alt='login' onClick={() => navigate('/login')} />,
    search: <Icon src={search} alt='search' onClick={() => navigate('/search')} />,
  };

  return icon[type]; //return icon[type]: type에 따라 적절한 아이콘을 반환
};

const HeaderWrapper = styled.div`
  margin-top: 10px;
  width: 95%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconsContainer = styled.div`
  width: 70%;
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
