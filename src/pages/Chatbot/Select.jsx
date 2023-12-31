import React, { useState } from "react";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import ChatBot, { triggerNextStep } from "react-simple-chatbot";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;
const Button = styled.button`
    padding: 5px;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    margin-left: 165px;
`
const Form = styled.div`
  width: 100%;
  input,
  select {
    width: 97%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 8px;
    margin-bottom: 10px;
  }
`;

const Name = styled(Form)``;
function handleNextStep(formData, triggerNext) {
  // 여기서 formData를 사용하여 원하는 작업을 수행하고 다음 단계로 이동할 수 있습니다.
  // 예를 들어, 채팅봇에게 다음 단계로 이동하라는 신호를 보낼 수 있습니다.
  triggerNext("14");
}
function Input3({ triggerNextStep }) {
  const [formData, setFormData] = useState({
    text: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormData = {
      ...formData,
      text: event.currentTarget.text.value,
    };

    setFormData(newFormData);
    triggerNextStep();
    console.log("입력된 데이터:", newFormData);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Name>
          <Typo style={{ padding: "5px" }} fontType="medium">
            문의사항
          </Typo>
          <input type="text" name="text" placeholder="입력하세요" />
        </Name>
        <Button type="submit">제출</Button>
      </form>
    </Wrapper>
  );
}

export default Input3;
