import styled from "styled-components";
import CircleButton from "../Button/CircleButton";
import { useRecoilValue } from "recoil";
import { PopupCategory } from "../../atom";
import { useState } from "react";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.listid === "main" ? 4 : 5)},
    1fr
  );
  gap: 10px;
  width: 100%;
  align-items: center;
  min-height: 150px;
  padding: 0px 20px;
`;

function Category({ listid }) {
  const categories = useRecoilValue(PopupCategory);
  const [shape, setShape] = useState("");

  useEffect(() => {
    getImgs();
  }, []);

  function getList() {
    if (listid === "main") {
      return categories;
    } else {
      return ["모아보기", ...categories];
    }
  }
  function getImgs() {
    if (listid === "main") {
      setShape("circle");
      setImgs([
        "img/cate1.png",
        "img/cate2.png",
        "img/cate3.png",
        "img/cate4.png",
      ]);
    } else {
      setShape("rect");
      setImgs([
        "img/cateall.png",
        "img/cate1.png",
        "img/cate2.png",
        "img/cate3.png",
        "img/cate4.png",
      ]);
    }
  }

  const [imgs, setImgs] = useState([]);

  return (
    <Wrapper listid={listid}>
      {getList().map((i, index) => (
        <CircleButton img={imgs[index]} title={i} shape={shape} />
      ))}
    </Wrapper>
  );
}
export default Category;
