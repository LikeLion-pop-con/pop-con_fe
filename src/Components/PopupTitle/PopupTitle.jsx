import styled from "styled-components";
import Typo from "../../assets/Typo";

const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function PopupTitle({ text }) {
  return (
    <Wrapper>
      <Typo fontType="title">{text}</Typo>
    </Wrapper>
  );
}
export default PopupTitle;
