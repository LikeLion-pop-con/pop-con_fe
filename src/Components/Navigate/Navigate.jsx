import { styled } from 'styled-components';
import Margin from '../Margin/Margin';
import Typo from '../../assets/Typo'
import home from '../../assets/Icons/NavigationBar/home.svg'
import category from '../../assets/Icons/NavigationBar/category.svg'
import back from '../../assets/Icons/NavigationBar/back.svg'
import like from '../../assets/Icons/NavigationBar/like.svg'
import my from '../../assets/Icons/NavigationBar/my.svg'
import { useNavigate } from 'react-router-dom';

const MainWrapper = styled.div`
  width: 450px;
  height: 60px;
  background-color: #EC7538;
  position: fixed;
  bottom: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconsContainer = styled.div`
  top: 10px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  position: relative;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 60px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Icon = ({ img, children, onClick }) => {
  return (
    <IconWrapper onClick={onClick}>
      {img === 'empty' ? <Margin width='14px' /> : <img src={img} style={{ width: '18px' }} />}
      <Typo color='white' fontType='small'>
        {children}
      </Typo>
    </IconWrapper>
    );
  };

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <IconsContainer>
        <Icon onClick={() => navigate(-1)} img={back}>
          BACK
        </Icon>
        <Icon onClick={() => navigate('/category')} img={category}>
          CATEGORY
        </Icon>
        <Icon onClick={() => navigate('/main')} img={home}>
          HOME
        </Icon>
        <Icon onClick={() => navigate('/like')} img={like}>
          LIKE
        </Icon>
        <Icon onClick={() => navigate('/my')} img={my}>
          MY
        </Icon>
      </IconsContainer>
    </MainWrapper>
  );
};
