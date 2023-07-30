import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
	height: 0px;
	width: 0px;
	background: rgba(255, 255, 255, 1);
}
::-webkit-scrollbar-thumb {
  background: #ff0000;
  -webkit-border-radius: 3ex;
}

::-webkit-scrollbar-corner {
  background: rgba(255,255,255,1);
}
  }
  
  html, body, #root {
      width: 100%;
      min-height: 100vh;
      background-color: ${({ theme }) => theme.colors.black};
      justify-content: center;
      display: flex;
      font-family: 'Noto Sans KR', sans-serif;

  }

  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
    font-weight: 400;
  }
  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.black}
  }
 `;

export default GlobalStyle;
