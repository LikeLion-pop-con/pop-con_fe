import styled from "styled-components";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PopupButton from "../../Components/PopupButton/PopupButton";
import Header from "../../Components/Header/Header";
import Horizon from "../../Components/Horizon/Horizon";

const Wrapper = styled.div`
  width: 100%;
`;

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <Wrapper>
      <p>Hi my name is jun</p>
      <Horizon width = '40%'/>
    </Wrapper>
    </>
  );
};

export default Main;
