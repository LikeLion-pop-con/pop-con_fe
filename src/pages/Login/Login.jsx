import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Typo from "../../assets/Typo";
import { BiArrowBack } from "react-icons/bi";
import Margin from "../../Components/Margin/Margin";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
const LoginText = styled.p``;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -75%;
  margin-top: 3%;
`;
const BackText = styled.p`
  margin: 5px;
`;
const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  gap: 5%;
  margin-top: -10px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Label = styled.label`
  margin-bottom: 5px;
`;
const Input = styled.input`
  padding-left: 10px;
  width: 326px;
  height: 49px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;
const LoginButton = styled.button`
  width: 326px;
  height: 48px;
  background-color: #ec7538;
  border: none;
  border-radius: 8px;
`;
const ResisterButton = styled.button`
  width: 326px;
  height: 48px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;
const ButtonWapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const navigate = useNavigate();
  const [isYes, setIsYes] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");
  const onLoginFormSubmit = (data) => {
    console.log(data);
    axios
      .post("https://popcon.store/login/", {
        userID: data.userID,
        password: data.password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        localStorage.setItem("Pk", response.data.pk);
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("Name", response.data.이름);
        localStorage.setItem("Phone", response.data.전화번호);
        localStorage.setItem("Gender", response.data.성별);
        localStorage.setItem("Address", response.data.주소);
        localStorage.setItem("UserType", response.data.회원종류);
        console.log("로그인 성공");
        if (response.data.회원종류 === 1) {
          return navigate("/main");
        } else if (response.data.회원종류 === 2) {
          return navigate("/AdminMain");
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        yestoast();
        console.log(err);
      });
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const yestoast = () =>
    toast.error("아이디 혹은 비밀번호가 잘못되었습니다.", {
      duration: 6000,
      style: {
        marginTop: 50,
      },
    });
  return (
    <>
      <Top onClick={handleGoBack}>
        <BiArrowBack size={30} />
        <BackText>
          <Typo size="1.1rem" weight="400">
            뒤로
          </Typo>
        </BackText>
      </Top>
      <form onSubmit={handleSubmit(onLoginFormSubmit)}>
        <LoginBox>
          <LoginText>
            <Typo size="2.5rem" weight="400">
              로그인
            </Typo>
          </LoginText>
          <InputWrapper>
            <Label>이메일 (아이디)</Label>
            <Input type="userID" {...register("userID", { required: true })} />
            {errors.userID && <span>이메일을 입력해주세요.</span>}
          </InputWrapper>

          <InputWrapper>
            <Label>비밀번호</Label>
            <Input
              type="password"
              {...register("password", { required: true })}
              autoComplete="new-password"
            />
            {errors.password && <span>비밀번호를 입력해주세요.</span>}
          </InputWrapper>
          <ButtonWapper>
            <LoginButton type="submit">
              <Typo size="1.1rem" weight="600" color="white">
                로그인
              </Typo>
            </LoginButton>
            <Margin height="10" />
            <ResisterButton onClick={() => navigate("/resister")}>
              <Typo size="1.1rem" weight="600" color="black">
                이메일로 시작하기
              </Typo>
            </ResisterButton>
          </ButtonWapper>
          <Toaster position="top-center" />
        </LoginBox>
      </form>
    </>
  );
};

export default Login;
