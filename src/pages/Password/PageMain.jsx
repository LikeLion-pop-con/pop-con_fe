import React from "react";
import "./Main.css";
import Inputter from "./Inputter";
import { useState, useEffect } from "react";
import * as api from "../../api";
import { Navigate, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
function Password() {
  const [password, setPassword] = useState("");
  const pw = localStorage.getItem("account_password");
  const id = localStorage.getItem("Pk");
  const [Cardcheck, setCardcheck] = useState([]);
  const navigate = useNavigate();
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  const getCardcheck = async () => {
    const getCardcheck = await api.getCardcheck(id, pw);
    setCardcheck(getCardcheck);
    console.log(getCardcheck);
  };
  const Button1 = styled.div`
    cursor: pointer;
    position: relative;
    right: -40%;
    top: -15px;
  `;
  useEffect(() => {
    if (pw) {
      getCardcheck();
    }
  }, [pw]);
  const handleNavigateBack = () => {
    navigate(-1);
  };
  return (
    <div className="main">
      <Button1 onClick={handleNavigateBack}>X</Button1>
      <h1>결제 비밀번호</h1>
      <br />

      {pw ? (
        <>
          <p>비밀번호를 입력해주세요</p>
          <br />
          <Inputter onPasswordChange={handlePasswordChange} />
        </>
      ) : (
        <>
          <p>비밀번호를 등록해주세요</p>

          <Inputter onPasswordChange={handlePasswordChange} />
        </>
      )}
    </div>
  );
}

export default Password;
