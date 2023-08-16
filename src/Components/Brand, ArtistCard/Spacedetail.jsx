import React from "react";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import Horizon from "../Horizon/Horizon";
import Margin from "../Margin/Margin";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: pre-line;
  width: 100%;
`;
const BodyText = styled.p`
  width: 90%;
  margin: 0 5%;
  line-height: 1.6;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TextWrap = styled.span`
  font-weight: 600;
  margin-right: 5px;
`;

const Spacedetail = ({ mainPoint, spaceRecommendation }) => {
  const contentOrder = [mainPoint, spaceRecommendation];

  const contentTitle = ["• 주요 포인트: ", "• 공간 활용 추천: "];

  console.log(contentOrder);

  return (
    <>
      <Wrapper>
        <TextWrapper>
          <BodyText>
            {contentOrder.map((text, index) => (
              <>
                <Typo style={{ lineHeight: 1.2 }} size="1rem" weight="400">
                  <TextWrap>{contentTitle[index]}</TextWrap>
                  {text}
                </Typo>
                <Margin height="10" />
              </>
            ))}
          </BodyText>
        </TextWrapper>
      </Wrapper>
    </>
  );
};

export default Spacedetail;
