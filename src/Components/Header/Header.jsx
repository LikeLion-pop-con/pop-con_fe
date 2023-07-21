import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  p {
    margin-right: 15px;
  }
`;

function Header() {
  return <Wrapper></Wrapper>;
}
export default Header;
