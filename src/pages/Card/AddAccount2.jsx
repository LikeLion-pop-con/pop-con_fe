import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";

import * as api from "../../api";
const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 60px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-left: 50%;
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

const StyledLabel = styled.label`
  position: absolute;
  color: #aaa;
  left: 0%;
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
const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
  margin-top: -13px;
  position: relative;
  bottom: -20px;
`;
const NextButton = styled.button`
  width: 50%;
  height: 50px;
  margin-top: 100px;
  background-color: #ec7538;
  border-radius: 15px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
`;
const AddAccount2 = () => {
  const { bankName } = useParams();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const id = localStorage.getItem("Pk");
  const [user_pk, setUserPk] = useState(id);
  const [account_password, setAccountPassword] = useState("1234");
  const [bank, setBank] = useState(bankName);
  const [bank_account_number, setBankAccountNumber] = useState("");
  const [cardNumber, setCard_number] = useState(null);
  const [cvc, setcvc] = useState(null);
  const [maxDate, setmaxDate] = useState(null);
  const [cardPasswordInput, setcardPasswordInput] = useState(null);
  const handleNextClick = async () => {
    try {
      setBankAccountNumber(inputValue);
      const response = await api.postCard(
        user_pk,
        account_password,
        bank,
        inputValue,
        cardNumber,
        maxDate,
        cvc,
        cardPasswordInput
      );

      console.log("Card registration successful:", response);
      navigate("/CardList/AddCard2");
    } catch (error) {
      console.error("Card registration error:", error);
    }
  };
  return (
    <>
      <Header left="logo" right={["login", "search"]} />
      <Text>
        {bankName}
        <br />
        <br />
        계좌번호를 입력해주세요!
      </Text>
      <InputContainer>
        <StyledInput
          type="number"
          value={inputValue}
          onChange={onInputChange}
          required
          pattern="[0-9]*"
          inputmode="numeric"
        />
        <StyledLabel>계좌번호</StyledLabel>
        {inputValue != 0 && inputValue.length < 10 ? (
          <ErrorMessage>계좌번호가 너무 짧아요!</ErrorMessage>
        ) : null}
        {inputValue.length > 14 ? (
          <ErrorMessage>계좌번호가 너무 길어요!</ErrorMessage>
        ) : null}
      </InputContainer>
      <NextButton onClick={handleNextClick}>다음</NextButton>
    </>
  );
};

export default AddAccount2;
