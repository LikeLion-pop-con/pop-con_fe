import styled from "styled-components";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Typo from "../../assets/Typo";
import Header from "../../Components/Header/Header";


const Wrapper = styled.div`
  width: 100%;

`;

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
    
      <Typo size= "2rem" weight= "bold" >Hi my name is </Typo>
      <p>Hi my name is jun</p>

    </>
  );
};

export default Welcome;