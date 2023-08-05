import SpacePopup from "../Card/SpacePopup";
import styled from "styled-components";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Icons/Header/logo.png';
import cancelButton from '../../assets/Icons/Card/cancelButton.svg';
import Button from '../../assets/Icons/Card/Button.svg';
import Typo from '../../assets/Typo';
import Margin from '../Margin/Margin';
import Header from '../Header/Header';


const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`   
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5%;
`

const CardEach = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: white;
    min-width: 300px;
    max-width: 400px;
    border: 0.5px solid lightgray;
    border-radius: 16px;
    cursor: pointer;
    margin: 10px;
    box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
    scroll-snap-align: center;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin: 3%;
    margin-top: 1%;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; // 텍스트 자체를 가운데 정렬렬
`

const UnderWapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 6%;
`

const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다 
`;

const AskButton = styled.button`
width: 90%;
height: 30px;
background-color: #EC7538;
border: none;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5%;
`;


function Modal({ isOpen, content, closeModal }) {
  const navigate = useNavigate();
    return (
      <div
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
          }}
        ></div>
        <div
          style={{
            position: "fixed",
            top: "250px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            maxHeight: "90%",
            overflowY: "auto",
            backgroundColor: "null",
          }}
        >

          <CardEach>
            <LogoWrapper>
                <Icon src={logo} width='10%' height='10%' alt='logo' onClick={() => navigate('/AdminMain')} />
                <Icon src={cancelButton} width='5%' height='10%' alt='cancelButton' onClick={closeModal} />
            </LogoWrapper>
            <TitleWrapper>
                <Typo size='1.3rem' weight='700'>등록할 공간을 갖고 계세요?</Typo>
            </TitleWrapper>
            <UnderWapper>
                <TextBox>
                    <Typo lineheight='20px' size='0.9rem'>
                    등록하고자 하는 공간의
                    <br/>
                    특징, 예산 등을 남겨 주시면
                    <br/>
                    공간 등록 과정을 안내해 드릴게요.
                    <br/>
                    아래 문의하기를 통해 남겨주세요!
                    </Typo>
                </TextBox>
            </UnderWapper>
            <AskButton type="submit" onClick={() => navigate('/Chatbot')}>
                <Typo size="0.9rem" weight="400" color="white">
                    문의하기
                </Typo>
            </AskButton>
          </CardEach>
        </div>
      </div>
    );
  }
export default Modal;
//<button onClick={closeModal}>Close</button>
  