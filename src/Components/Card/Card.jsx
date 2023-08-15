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
  height: 270px;
  min-width: 11rem;
  border-radius: 12px;
  cursor: pointer;
  margin: 9px;
  box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
  scroll-snap-align: center;
`;
//url(${(props) => props.backimageUrl});
//  background-size: cover;

const Thumbnail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //background-image: url('/Cardrose.jpg');
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: none;
  border-radius: 16px;

  height: 180px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Card = ({ image, title, category, main, onClick }) => {
  // image, title, category, main을 props로 받습니다.
  const navigate = useNavigate();
  return (
    <CardEach onClick={onClick}>
      <Thumbnail image={image} />
      <TextWrapper>
        <Typo size="1rem" weight="600">
          {title}
        </Typo>
        <Margin height="6" />
        <Typo size="small" color="gray">
          {" "}
          {category}{" "}
        </Typo>
        <Margin height="6" />
        <Typo size="0.8rem" color="gray">
          {main?.slice(0, 13)}
        </Typo>
        <Typo
          style={{
            width: "150px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          size="small"
          color="gray"
        >
          {main?.slice(13)}
        </Typo>
      </TextWrapper>
    </CardEach>
  );
};

export default Card;
