import { useNavigate, useOutletContext } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;
const AboutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  background-color: #ec7538;
  border: none;
  width: 60%;
  height: 40px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;
function BrandIntro() {
  const params = useOutletContext();
  console.log(params.cateId);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Margin height="20" />
      <PopupTitle text="브랜드 소개" />
      <LargeCard image="img/cate1.png" />
      <LargeCard image="img/cate1.png" />
      <LargeCard image="img/cate1.png" />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <AboutButton onClick={() => navigate("/")}>자세히 보기</AboutButton>
      </div>
      <Margin height="30" />
    </Wrapper>
  );
}
export default BrandIntro;
