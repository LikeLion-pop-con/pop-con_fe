import styled from "styled-components";
import Typo from "../../assets/Typo";
import Margin from "../Margin/Margin";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: 2px 3px 5px rgba(67, 0, 209, 0.1);
`;

function CircleButton({ img, title }) {
  return (
    <Wrapper>
      <Img bgImg={img}>
        <img alt={title} src={img}></img>
      </Img>
      <Margin height="6" />
      <Typo size="12px" weight="600">
        {title}
      </Typo>
    </Wrapper>
  );
}
export default CircleButton;
