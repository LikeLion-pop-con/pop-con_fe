import styled from "styled-components";
import Typo from "../../assets/Typo";
import { MdArrowForwardIos } from "react-icons/md";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props) => props.bottomgap}px;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 20px;
`;

function PopupTitle({ text, bottomgap, isarrow, onClick }) {
  return (
    <Wrapper bottomgap={bottomgap} onClick={onClick}>
      <Typo fontType="title">{text}</Typo>
      {isarrow && (
        <MdArrowForwardIos
          style={{ fontSize: 16, marginTop: 2, marginLeft: 3 }}
        />
      )}
    </Wrapper>
  );
}
export default PopupTitle;
