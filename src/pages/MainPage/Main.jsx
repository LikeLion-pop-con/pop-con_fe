import styled from "styled-components";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PopupButton from "../../Components/PopupButton/PopupButton";
import Header from "../../Components/Header/Header";
import Horizon from "../../Components/Horizon/Horizon";
import Margin from "../../Components/Margin/Margin";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <Wrapper>
      <Margin height="5"/>
      <p>Hi my name is jo</p>
      <Margin height="10"/> 
      <Horizon width="50%" color="green"/>
    </Wrapper>
    </>
  );
};

export default Main;
