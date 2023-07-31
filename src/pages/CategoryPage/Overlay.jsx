import styled from "styled-components";
import ShowCate from "./ShowCate";
import { useRecoilValue } from "recoil";
import { isCateClicked } from "../../atom";

const Background = styled.div`
  width: 450px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  position: relative;
`;
const OverlayWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Overlay() {
  const isClicked = useRecoilValue(isCateClicked);

  console.log(isClicked);
  return (
    <Background>
      {isClicked ? (
        <OverlayWrap>
          <ShowCate />
        </OverlayWrap>
      ) : null}
    </Background>
  );
}
export default Overlay;
