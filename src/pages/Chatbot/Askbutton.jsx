import React from 'react';
import styled from 'styled-components';
import {triggerNextStep} from 'react-simple-chatbot';
const AskButton = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  font-size: 1rem;
  font-weight: 600;
`;
function handleNextStep(triggerNext) {
    // 여기서 formData를 사용하여 원하는 작업을 수행하고 다음 단계로 이동할 수 있습니다.
    // 예를 들어, 채팅봇에게 다음 단계로 이동하라는 신호를 보낼 수 있습니다.
    triggerNext("25");
  }
const Askbutton = ( {triggerNextStep} ) => {
  const handleButtonClick = () => {
    triggerNextStep();
  };
  const handleButtonClick1 = () => {
    window.open('http://pf.kakao.com/_xlxixmxhG', '_blank')
    triggerNextStep();
  };
  return (
    <>
      <AskButton onClick={handleButtonClick1} >PopCon에 문의</AskButton>
      <AskButton onClick={handleButtonClick}>문의 안할거에요!</AskButton>
    </>
  );
};

export default Askbutton;
