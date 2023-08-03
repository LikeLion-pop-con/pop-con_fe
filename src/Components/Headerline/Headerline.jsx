import styled from "styled-components";
import Typo from "../../assets/Typo";
import Margin from "../Margin/Margin";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5%;
  margin-left: 5%;
  width: 100%;
`;

const Content = styled.p`
  font-size: 13px;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: %;

`;

function Headerline({ etc, title, subtitle, content }) {
  return (
    <Wrapper>
      <Margin height="5" />
      {etc ? (
        <Typo size="12px" weight="400">
          {etc}
        </Typo>
      ) : (
        <Margin heigth="5" />
      )}
      {etc && <Margin height="5" />}
      {title && <Typo fontType="medium">{title}</Typo>}

      {subtitle && <Margin height="5" />}
      {subtitle && (
        <Typo size="13px" weight="600" opacity="0.8">
          {subtitle}
        </Typo>
      )}

      {content && <Margin height="5" />}
      {content && (
        <Typo size="13px" weight="300" opacity="0.8">
          {content}
        </Typo>
      )}
    </Wrapper>
  );
};

export default Headerline;
