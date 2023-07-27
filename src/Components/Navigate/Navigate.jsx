import { styled } from 'styled-components';
import Margin from '../Margin/Margin';
import Typo from '../Typo/Typo';
import home from '../../assets/Icons/NavigationBar/home.svg'
import category from '../../assets/Icons/NavigationBar/category.svg'
import search from '../../assets/Icons/NavigationBar/search.svg'
import like from '../../assets/Icons/NavigationBar/like.svg'
import my from '../../assets/Icons/NavigationBar/my.svg'
import { useNavigate } from 'react-router-dom';

const MainWrapper = styled.div`
  height: 60px;
  background-color:

  position: fixed;
  bottom: 0;
  width: 390px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -40px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 60px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// TODO: 제품 검색을 들은 페이지로 이동
const Icon = ({ img, children, onClick }) => {
  return (
    <IconWrapper onClick={onClick}>
      {img === 'empty' ? <Margin width='14px' /> : <img src={img} style={{ width: '18px' }} />}
      <Typo color='black' fontType='small'>
        {children}
      </Typo>
    </IconWrapper>
  );
};

export default function NavigationBar({ userType }) {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <PostArticleButton>
        <img src={plus} alt='plus' onClick={() => navigate('/DesignUpload1')} />
      </PostArticleButton>
      <IconsContainer>
        <Icon onClick={() => navigate('/main')} img={home}>
          홈
        </Icon>
        <Icon onClick={() => navigate('/guide')} img={lens}>
          가이드보기
        </Icon>
        <Icon onClick={() => navigate('/DesignUpload1')} img='empty'>
          업로드하기
        </Icon>
        <Icon img={chat} onClick={() => Toast('아직 준비중입니다.')}>
          채팅
        </Icon>
        <Icon img={drawers} onClick={() => Toast('아직 준비중입니다.')}>
          의뢰 내역
        </Icon>
      </IconsContainer>
    </MainWrapper>
  );
}
