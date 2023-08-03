import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Typo from "../../assets/Typo";
import Margin from "../Margin/Margin";

const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`; // page에서 사용

const CardEach = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 240px;
  min-width: 10rem;
  border-radius: 12px;
  cursor: pointer;
  margin: 0px 10px;
  box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
  scroll-snap-align: center;
`;
const Thumbnail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //background-image: url('/Cardrose.jpg');
  background-image: url(" ${(props) => props.image} ");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  height: 160px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 15px;
`;

const SmallCard = ({ image, title, category, main, onClick}) => {
  const navigate = useNavigate();
  return (
    <CardBlock>
      <CardEach onClick={onClick}>
        <Thumbnail image={image} />
        <TextWrapper>
          <Typo size="0.9rem" weight='400'>{title}</Typo>
          <Margin height="6" />
          <Typo size="0.7rem" color="gray">
            {category}
          </Typo>
          <Margin height="4" />
          <Typo size="0.7rem" color="gray">
            {main}
          </Typo>
        </TextWrapper>
      </CardEach>
    </CardBlock>
  );
};

export default SmallCard;
