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
`;

const InfoText = styled.p`
  margin-top: 40px;
  margin-bottom: 20%;
`;

const TitleText = styled.p`
  margin: 30px;
`;

const BodyText = styled.p`
  width: 80%;
  margin-left: 10%;
  line-height: 120%;
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

const Popinfodetail = ({ bodyText }) => {
  const contentOrder = bodyText.split("\n");

  const contentTitle = [
    "• 운영 기간: ",
    "• 운영 시간: ",
    "• 기획/운영: ",
    "• 소개: ",
    "• 키워드: ",
    "• 자료 출처: ",
  ];

  console.log(contentOrder);

  return (
    <>
      <Wrapper>
        <Typo size="1.1rem" weight="600">
          <InfoText>팝업 정보</InfoText>
        </Typo>
        <Horizon width="90%" />
        <TextWrapper>
          <div>
            <TitleText>
              <Typo size="1.3rem" weight="600">
                팝업 소개
              </Typo>
            </TitleText>
          </div>
          <div>
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
          </div>
        </TextWrapper>
      </Wrapper>
    </>
  );
};

export default Popinfodetail;
