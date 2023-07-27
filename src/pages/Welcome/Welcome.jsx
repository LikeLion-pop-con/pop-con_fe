import styled from "styled-components";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Typo from "../../assets/Typo";
import Header from "../../Components/Header/Header";
import Margin from "../../Components/Margin/Margin";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 38px;
`;

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
    <Wrapper>
      <Typo height="10px" size="2rem" weight="bold">Hi my name is jo</Typo>
      <Margin height="10"/>
      <p>글꼴이 어떻게 나올까</p>
    </Wrapper>
    </>
  );
};

export default Welcome;