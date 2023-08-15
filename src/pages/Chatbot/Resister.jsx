import React from 'react';
import styled from 'styled-components';
import {triggerNextStep} from 'react-simple-chatbot';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { isBotClicked } from "../../atom";
import { useRecoilState } from 'recoil';
const AskButton = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  font-size: 1rem;
  font-weight: 600;
`;
const Input5 = ({ triggerNextStep }) => {
  const navigate = useNavigate();
 const [isClicked, setIsClicked] = useRecoilState(isBotClicked); 

 const handleButtonClick = () => {
    navigate(`/Resister`);
    setIsClicked(false);

};


  const handleButtonClick1 = () => {
    triggerNextStep();
  };
  return (
    <>
      <AskButton onClick={handleButtonClick} >회원가입하러가기</AskButton>
      <AskButton onClick={handleButtonClick1} >다음에 할래요.</AskButton>
    </>
  );
};

export default Input5;
