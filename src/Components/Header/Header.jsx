// Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/Icons/Header/logo.png";
import login from "../../assets/Icons/Header/login.svg";
import search from "../../assets/Icons/Header/search.svg";
import logo1 from "../../assets/Icons/Header/logo2.png";

const Icon = styled.img`
  cursor: pointer;
`;

const iconType = (navigate, type, isBlack) => {
  const icon = {
    logo: (
      <Icon
        src={isBlack ? logo1 : logo}
        alt="logo"
        width="20%"
        onClick={() => {
          console.log(localStorage.getItem("UserType"));
          if (parseInt(localStorage.getItem("UserType")) === 2) {
            navigate("/Adminmain");
          } else {
            navigate("/main");
          }
        }}
      />
    ),
    login: <Icon src={login} alt="login" onClick={() => navigate("/login")} />,
    search: (
      <Icon src={search} alt="search" onClick={() => navigate("/search")} />
    ),
  };

  return icon[type];
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ Color }) => Color || "white"};
`;

const IconsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

const EmptyIcon = styled.div`
  width: 16px;
  height: 16px;
`;

export default function Header({ type, left = "", right = [], bgColor }) {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("Token");

  return (
    <>
      <HeaderWrapper Color={bgColor}>
        <IconsContainer>
          {left ? iconType(navigate, left, type) : <EmptyIcon />}
        </IconsContainer>
        <IconWrapper>
          {right.map((iconTypeItem) => {
            if (iconTypeItem === "login") {
              return isLoggedIn ? null : iconType(navigate, iconTypeItem, type);
            } else {
              return iconType(navigate, iconTypeItem, type);
            }
          })}
        </IconWrapper>
      </HeaderWrapper>
    </>
  );
}
