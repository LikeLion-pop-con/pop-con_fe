import styled from "styled-components";
import Typo from "../../assets/Typo";

const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.main};
  border: none;
  width: ${(props) => props.width};
  border-radius: 10px;
  height: 38px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

function Button({ bgColor, width }) {
  return (
    <>
      <MainButton width={width} bgColor={bgColor}>
        <Typo fontType="medium">버튼</Typo>
      </MainButton>
    </>
  );
}

export default Button;
