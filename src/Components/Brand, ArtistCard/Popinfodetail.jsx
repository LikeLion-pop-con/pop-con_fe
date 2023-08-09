import React, { useEffect } from "react";
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

const InfoText = styled.p`
  margin-top: 40px;
  margin-bottom: 20%;
`;

const TitleText = styled.p`
  margin: 30px;
`;

const BodyText = styled.p`
  width: 90%;
  margin: 0 5%;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.textstyle === "center" ? "center" : "flex-start"};
`;
const Image = styled.div`
  width: 100%;
  text-align: center;
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

const Popinfodetail = ({
  firsttitle,
  bodytitle,
  bodyText,
  textstyle,
  width,
  image,
  isTabed,
}) => {
  useEffect(() => {
    return () => console.log("it is over"); 
  }, []);
  const contentOrder = bodyText?.split("\n");

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
        {isTabed && (
          <>
            <Typo size="1.1rem" weight="600">
              <InfoText>팝업 정보</InfoText>
            </Typo>
            <Horizon width="90%" />
          </>
        )}

        <TextWrapper>
          {firsttitle ? (
            <div>
              <TitleText>
                <Typo size="1.3rem" weight="600">
                  팝업 소개
                </Typo>
              </TitleText>
            </div>
          ) : (
            <>
              <Margin height="30" />
              <Image>
                <img src={image} width="300" height="400"></img>
              </Image>
              <Margin height="30" />
            </>
          )}

          <BodyText textstyle={textstyle}>
            {contentOrder?.map((text, index) => (
              <>
                <Typo
                  style={{
                    lineHeight: 1.2,
                    textAlign: textstyle === "center" ? "center" : "normal",
                    width: width,
                  }}
                  size="1rem"
                  weight="400"
                >
                  {bodytitle && <TextWrap>{bodytitle[index]}</TextWrap>}
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

export default Popinfodetail;
