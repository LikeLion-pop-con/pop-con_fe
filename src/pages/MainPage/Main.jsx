import styled from "styled-components";
import PopupButton from "../../Components/PopupButton/PopupButton";
import Header from "../../Components/Header/Header";

const Wrapper = styled.div`
  width: 100%;
`;

function Main() {
  return (
    <Wrapper>
      <Header></Header>
      <PopupButton />
    </Wrapper>
  );
}
export default Main;
