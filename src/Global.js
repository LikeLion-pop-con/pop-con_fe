import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
      width: 100%;
      min-height: 100vh;
      background-color: ${({ theme }) => theme.colors.lightgray};
      justify-content: center;
      display: flex;
      font-family: 'Noto Sans KR', sans-serif;
      margin: 0;
      padding: 0;
  }

  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
    font-weight: 400;
  }



  * {//우선순위 1로 변경하는법 찾기, 로컬이랑 우선순위가 같은것 같다. 그래서 오버라이딩돼지않았을까
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 100px;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
