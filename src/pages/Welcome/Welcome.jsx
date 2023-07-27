import styled from "styled-components";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Typo from "../../assets/Typo";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";
import LargeCard from "../../Components/Card/LargeCard";


const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-items: center;
 
`;

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
    
      <Typo size= "2rem" weight= "bold" > Hi my name is jo </Typo>
      <Typo>글꼴이 어떻게 나올까</Typo>
      <Typo color= 'green'>모든 인류 구성원의</Typo>
      <Card/>
      <LargeCard/>
      <Wrapper>
       <img name='cardrose' src='cardrose.jpg' width="100px" height="100px"></img>
       
      </Wrapper>
    


    </>
  );
};

export default Welcome;