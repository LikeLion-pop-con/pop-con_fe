import styled from "styled-components";
import SmallButton from "../Button/SmallButton";
import { useState } from "react";

const Wrapper = styled.div`
  position: relative;
  overflow-x: scroll;
  min-height: 250px;
  width: 100%;
`;
const Items = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  div {
    margin: 0px 20px;
  }
  /* display: grid;
  grid-template-columns: repeat(${(props) => props.cards}, 1fr);
  gap: 20px; */
`;

function SliderX() {
  const [cards, setCards] = useState([1, 1, 1]);
  return (
    <Wrapper>
      <Items cards={cards.length}>
        {cards.map((i) => (
          <SmallButton></SmallButton>
        ))}
      </Items>
    </Wrapper>
  );
}
export default SliderX;
