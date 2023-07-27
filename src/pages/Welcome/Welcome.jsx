import styled from "styled-components";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PopupButton from "../../Components/PopupButton/PopupButton";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";

const Wrapper = styled.div`
  width: 100%;
`;

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Typo size = "2rem" weight = "bold">Hi my name is jo</Typo>
    </Wrapper>
  );
};

export default Welcome;