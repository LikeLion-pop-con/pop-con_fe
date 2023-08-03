import { useOutletContext } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

function BrandpopupPost() {
  const params = useOutletContext();
  console.log(params.cateId);

  return (
    <Wrapper>
      <Margin height="20" />
      <PopupTitle text="브랜드 포스트" />
      <LargeCard image="img/Artistimg/Backrose.png" />
    </Wrapper>
  )
}
export default BrandpopupPost;
