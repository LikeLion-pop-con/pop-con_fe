import styled from "styled-components";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PopupButton from "../../Components/PopupButton/PopupButton";
import Header from "../../Components/Header/Header";

const Wrapper = styled.div`
  width: 100%;
`;

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <p>Hi my name is jun</p>

    </Wrapper>
  );
};

export default Welcome;