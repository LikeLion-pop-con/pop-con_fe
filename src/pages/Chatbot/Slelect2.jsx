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
const Input4 = ({ triggerNextStep }) => {
  const navigate = useNavigate();
 const [isClicked, setIsClicked] = useRecoilState(isBotClicked); 

  const handleButtonClick = () => {
    navigate(`/Password`);
    setIsClicked(false); 
  };


  const handleButtonClick1 = () => {
    triggerNextStep();
  };
  return (
    <>
      <AskButton onClick={handleButtonClick} >카드 등록하기</AskButton>
      <AskButton onClick={handleButtonClick1} >등록안할거에요!</AskButton>
    </>
  );
};

export default Input4;
