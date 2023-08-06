import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

* {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    
    ::-webkit-scrollbar{
      height: 3px;
      width: 5px;
      background: rgba(255, 255, 255, 1);
    }
    
    ::-webkit-scrollbar-thumb {
      background: #ec7538;
      -webkit-border-radius: 3ex;
    }
    ::-webkit-scrollbar-corner {
      background: rgba(255,255,255,1);
    }
  }
  
 
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght&display=swap');
    font-weight:400;
  }


  html, body, #root {
      width: 100%;
      min-height: 100vh;
      background-color: ${({ theme }) => theme.colors.lightgray};
      justify-content: center;
      display: flex;
      //font-family: 'Noto Sans KR', sans-serif;
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 16px;
      box-sizing: border-box;
      .react-datepicker {

        .react-datepicker__day {

              width: 36px;
              height: 36px;
              text-align: center;
              cursor: pointer;

              &:hover {
                background-color: rgba(0, 0, 0, 0.1);
              }

              &.react-datepicker__day--selected {
                background-color: rgb(0, 0, 0);
                border-radius: 8px;
                color: white;

                &:hover {
                  background-color: #000000;
                }
              }

              &.react-datepicker__day--outside-month {
                cursor: default;
                visibility: hidden;
              }
            }

          .react-datepicker__day--outside-month {
            cursor: default;
            visibility: hidden;
          }
          .react-datepicker__day-names {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;

              .react-datepicker__day-name {
                color: #5b5b5b;
                width: 36px;
              }
            }
          .react-datepicker__header {
            background-color: white;
            border-bottom: none;
            border-radius: 0;
          }
        .react-datepicker__triangle {
            display: none;
          }
        }
      }

  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  }


  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black}
  }
`;

export default GlobalStyle;
