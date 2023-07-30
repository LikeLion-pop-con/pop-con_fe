import styled from "styled-components";
import Typo from "../../assets/Typo";
import Margin from "../Margin/Margin";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-shadow: 3px 3px 7px rgba(67, 0, 209, 0.2);
`;

function CircleButton({ img, title }) {
  return (
    <Wrapper>
      <Img bgImg={img}></Img>
      <Margin height="4" />
      <Typo size="12px" weight="400">
        {title}
      </Typo>
    </Wrapper>
  );
}
export default CircleButton;
