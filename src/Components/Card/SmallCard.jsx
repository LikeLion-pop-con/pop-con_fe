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
  border-radius: 16px;
  cursor: pointer;
  margin: 0px 10px;
  margin-bottom: 20px;
  box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
  scroll-snap-align: center;
`;
const Thumbnail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 16px;
  height: 160px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-height: 70px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 15px;
`;
const CategoryMapping = {
  1: "푸드",
  2: "패션 잡화",
  3: "테크 가전",
  4: "뷰티",
  5: "클래스",
  6: "그림",
  7: "문학",
  8: "영상",
  9: "음악",
};

const SmallCard = ({ image, title, category, main, onClick }) => {
  const navigate = useNavigate();
  const mappedCategory = CategoryMapping[category];
  return (
    <CardBlock>
      <CardEach onClick={onClick}>
        <Thumbnail image={image} />
        <TextWrapper>
          <Typo size="0.9rem" weight="600">
            {title}
          </Typo>
          <Margin height="6" />
          <Typo size="0.7rem" color="gray">
            {mappedCategory}
          </Typo>
          <Margin height="4" />
          <Typo size="0.8rem">{main?.slice(0, 14)}</Typo>
          <Typo
            size="0.8rem"
            style={{
              width: "150px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {main?.slice(14)}
          </Typo>
        </TextWrapper>
      </CardEach>
    </CardBlock>
  );
};

export default SmallCard;
