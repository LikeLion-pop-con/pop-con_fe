import styled from "styled-components";
import CircleButton from "../Button/CircleButton";
import { useRecoilValue } from "recoil";
import { PopupCategory } from "../../atom";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  min-height: 150px;
  padding: 0px 20px;
`;

function Category() {
  const categories = useRecoilValue(PopupCategory);

  const [imgs, setImgs] = useState([
    "img/store.png",
    "img/gallery.png",
    "img/stage.png",
    "img/class.png",
  ]);

  return (
    <Wrapper>
      {categories.map((i, index) => (
        <CircleButton img={imgs[index]} title={i} />
      ))}
    </Wrapper>
  );
}
export default Category;
