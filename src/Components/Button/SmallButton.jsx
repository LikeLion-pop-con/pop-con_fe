import styled from "styled-components";
import Headerline from "../Headerline/Headerline";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  flex-shrink: 0;
`;
const Img = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 9rem;
  border-radius: 20px;
`;

function SmallButton() {
  return (
    <Wrapper>
      <Img bgImg="img/Artistimg/rose.jpg"></Img>
      <Headerline
        etc="1500% 달성 / 200명"
        title="짜바 스크립트"
        subtitle="오프라인 특별 강의"
        content="프로그래밍 언어 먹방 공간"
      ></Headerline>
    </Wrapper>
  );
}
export default SmallButton;
