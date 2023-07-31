import styled from "styled-components";
import Typo from "../../assets/Typo";
import Margin from "../Margin/Margin";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.shape === "circle" ? "5rem" : "3.5rem")};
  height: ${(props) => (props.shape === "circle" ? "5rem" : "3.5rem")};
  border-radius: ${(props) => (props.shape === "circle" ? "50%" : "10px")};
  border: ${(props) =>
    props.shape === "circle" ? "none" : "2px dotted rgba(0,0,0,1)"};
  box-shadow: 2px 3px 5px rgba(67, 0, 209, 0.1);
  cursor: pointer;
  img {
    width: ${(props) => (props.shape === "circle" ? "2.3rem" : "2.3rem")};
  }
`;

function CircleButton({ img, title, shape }) {
  const navigate = useNavigate();

  const handlePage = (title) => {
    if (title === "팝업 스토어") {
      navigate(`${1}`);
    } else if (title === "팝업 갤러리") {
      navigate(`${2}`);
    } else if (title === "팝업 스테이지") {
      navigate(`${3}`);
    } else if (title === "팝업 클래스") {
      navigate(`${4}`);
    }
  };

  return (
    <Wrapper>
      <Img shape={shape} onClick={() => handlePage(title)}>
        <img alt={title} src={img}></img>
      </Img>
      <Margin height="10" />
      <Typo
        style={{ cursor: "pointer" }}
        onClick={() => handlePage(title)}
        size="12px"
        weight="400"
      >
        {title}
      </Typo>
    </Wrapper>
  );
}
export default CircleButton;
