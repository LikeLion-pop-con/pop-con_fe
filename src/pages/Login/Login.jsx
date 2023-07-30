import React from 'react';
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form
import { useState } from 'react';
const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px;
`;

const LoginButton = styled.button`

`;

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const onLoginFormSubmit = (data) => {
    console.log(data);
    axios
      .post("http://43.200.175.239:8000/login/", {
        userID: data.userID,
        password: data.password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        localStorage.setItem("Token", response.data.token);
        console.log("로그인 성공");
        if (response.status === 200) {
          return navigate("/main");
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onLoginFormSubmit)}>
      <LoginBox>
        <label>Email</label>
        <Input type='userID' {...register('userID', { required: true })} />
        {errors.userID && <span>This field is required</span>}

        <label>Password</label>
        <Input type='password' {...register('password', { required: true })} autoComplete="new-password" />
        {errors.password && <span>This field is required</span>}

        <LoginButton type="submit">Login</LoginButton>
      </LoginBox>
    </form>
  );
};

export default Login;
