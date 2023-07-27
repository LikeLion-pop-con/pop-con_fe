import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
      width: 100%;
      min-height: 100vh;
      background-color: ${({ theme }) => theme.colors.lightgray};
      justify-content: center;
      display: flex;
      font-family: 'Noto Sans KR', 'sans-serif';
  }

  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
    font-weight: 400;
  }

  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
