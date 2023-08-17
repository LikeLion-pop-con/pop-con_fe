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
const Image = styled.img`
  width: 85%;
  height: 400px;
  background-image: url(${(props) => props.src})
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  place-self: center;
  border-radius: 15px;
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
  firstimg, // 팝업 정보 밑에 첫 타이틀 여부
  firsttitle,
  bodytitle, // 운영 시간, 운영 기간 등의 내용 타이틀
  bodyText, // 본문 내용 \n으로 구분
  textstyle, // 본문 text 정렬 스타일
  width, // 본문 width
  image, // 본문 이미지
  isTabed, // 팝업 정보 탭 유무
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
          {firstimg && (
            <>
              <Margin height="25" />
              <Image src={image}></Image>
              <Margin height="30" />
              {firsttitle && (
                <TitleText>
                  <Typo size="1.3rem" weight="600">
                    팝업 소개
                  </Typo>
                </TitleText>
              )}
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
