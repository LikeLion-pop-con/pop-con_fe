import styled from "styled-components";
import Typo from "../../assets/Typo";

const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props) => props.bottomgap}px;
`;

function PopupTitle({ text, bottomgap }) {
  return (
    <Wrapper bottomgap={bottomgap}>
      <Typo fontType="title">{text}</Typo>
    </Wrapper>
  );
}
export default PopupTitle;
