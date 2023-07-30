import React from 'react';
import { styled } from 'styled-components';
import Typo from '../../assets/Typo';
import {BsHeart} from "react-icons/bs"
import { BsFillShareFill } from "react-icons/bs";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Toptext = styled.p``;

const Bodytext = styled.p`
  width: 300px;
  text-align: center;
  margin: 15px;
  color: gray;
  line-height: 1.3;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -70%;
  right: -5%;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid lightgray;
  border-radius: 50%;
  padding: 8px;
  background-color: transparent;
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Carrddown2 = ({ toptext, bodytext }) => {
  return (
    <>
      <Wrapper>
        <Toptext>
          <Typo size="1.1rem" weight="600">{toptext}</Typo>
        </Toptext>
        <Bodytext>{bodytext}</Bodytext>
        <ButtonWrapper>
          <Button><BsHeart size={20}/></Button>
          <Button><BsFillShareFill size={20}/></Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Carrddown2;
