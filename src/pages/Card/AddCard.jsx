import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-top: 30px;
`;

const BodyText = styled.div`
  margin-bottom: 10px;
  font-size: 1.2rem;
  margin-left: 30px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InputContainer = styled.div`
  position: relative;
  width: 20%;
  margin-left: 10px;
  margin-top: 100px;
`;

const StyledInput = styled.input`
  font-size: 15px;
  color: #222222;
  width: 50%;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;

  &:placeholder {
    color: #aaaaaa;
  }

  &:focus {
    outline: none;
  }
`;

const Highlight = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0%;
  background-color: #666;
  width: 0;
  height: 2px;
  border-radius: 2px;
  transition: 0.5s;
`;

const NextButton = styled.button`
  width: 50%;
  height: 50px;
  margin-top: 100px;
  background-color: #ec7538;
  border-radius: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  position: absolute;
  color: #aaa;
  left: 5%;
  font-size: 1rem;
  bottom: 8px;
  transition: all 0.2s;

  ${StyledInput}:focus ~ &,
  ${StyledInput}:valid ~ & {
    font-size: 0.8rem;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
`;

const AddCard = () => {
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
    const handleInputChange = (index, event) => {
      const { value } = event.target;
  
      // Allow only numeric input
      if (!/^[0-9]*$/.test(value)) {
        event.preventDefault();
        return;
      }
  
      // Move focus to the next input if the value is exactly 4 characters
      if (value.length === 4 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    };
  
    return (
      <>
        <Header left="logo" right={["login", "search"]} />
        <Wrapper>
          <TitleText>
            카드번호 입력하고
            <br />
            결제를 완료하세요.10초면 끝!
          </TitleText>
          <BodyText>체크카드, 신용카드 모두 가능해요.</BodyText>
          <CardText>
            {inputRefs.map((ref, index) => (
              <InputContainer key={index}>
                <StyledInput
                  type="text"
                  maxLength="4"
                  required
                  onKeyDown={(event) => handleInputChange(index, event)}
                  ref={ref}
                />
                {index === 0 && <StyledLabel>카드번호</StyledLabel>}
                <Highlight />
              </InputContainer>
            ))}
          </CardText>
        </Wrapper>
      </>
    );
  };
  
  export default AddCard;
  
