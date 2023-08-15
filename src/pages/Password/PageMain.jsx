import React from "react";
import "./Main.css";
import Inputter from "./Inputter";
import { useState, useEffect} from "react";
import * as api from "../../api";
function Password() {
  const [password, setPassword] = useState("");
  const pw = localStorage.getItem("account_password");
  const id = localStorage.getItem("Pk");
  const [Cardcheck, setCardcheck] = useState([]);
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  const getCardcheck = async () => {
    const getCardcheck = await api.getCardcheck(id,pw);
    setCardcheck(getCardcheck);
    console.log(getCardcheck);
  };
  useEffect(() => {
    if (pw) {
      getCardcheck();
    }
  }, [pw]);
  return (
    <div className='main'>
      <h1>결제 비밀번호</h1>
      <br/>
      
      {pw ? (
        <>
          <p>비밀번호를 입력해주세요</p>
          <br/>
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
