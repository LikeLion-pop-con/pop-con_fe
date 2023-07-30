import styled from "styled-components";
import CircleButton from "../Button/CircleButton";
import { useRecoilValue } from "recoil";
import { PopupCategory } from "../../atom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  min-height: 150px;
`;

function Category() {
  const categories = useRecoilValue(PopupCategory);

  return (
    <Wrapper>
      {categories.map((i) => (
        <CircleButton img="img/Artistimg/rose.jpg" title={i} />
      ))}
    </Wrapper>
  );
}
export default Category;
