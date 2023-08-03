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
  //height: 470px;
  width: 95%;
  border-radius: 16px;
  border: 1px solid lightgray;
  cursor: pointer;
  margin: 9px;
  box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
  scroll-snap-align: center;
`;
const Thumbnail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(' ${(props) => props.image} ');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: none;
    border-radius: 16px;
    height: 230px;
    width: 95%;
    
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 15px;
    line-height: 18px;
    
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 20px;
  margin-top: 5px;
  line-height: 30px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 7px;
`;
const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
const Horizon = styled.div`
  margin-left: 20px;
  width: 15%;
  height: 2px;
  background-color: green;
`;

const PostCard = ({ image, type, title, color, main, onClick}) => {
  const navigate = useNavigate();
  return (
    <CardEach onClick={onClick}>
      <ThumbnailWrapper>
        <Thumbnail image={image} />
      </ThumbnailWrapper>
      <Margin height="15" />
      <TextWrapper>
        <Typo weight="500" size="0.9rem" color="main">
          {type}
        </Typo>
      </TextWrapper>
      <TitleWrapper>
        <Typo size='1.2rem' lineheight='26px'>{title}</Typo>
      </TitleWrapper>
      <Margin height="8" />
      <Horizon color={color} />
      <Margin height="16" />
      <TextWrapper>
        <Typo lineheight={1.5} weight="300">
          {main}
        </Typo>
      </TextWrapper>
      <Margin height="10" />
    </CardEach>
  );
};

export default PostCard;
