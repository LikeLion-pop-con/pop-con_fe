import { styled } from 'styled-components';
//import logo from ''
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Back = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
  min-height: 100vh;//푸터때매 글로벌스타일로 안채워져서 일단 헤이트를 100vh로 했음
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LogoWelcome() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      // 페이지 전환코드
      navigate('/main');
    }, 2500); //(1000 밀리초 = 1초)

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
    };
  }, []);

  
  return (
    <Back>
      <img src={"logo.png"} height='100' />
    </Back>
  );
}
