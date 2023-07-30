import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Background = styled.div`
  width: 450px;
  background-color: white;

  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  position: relative;
`;

function Layout() {
  return (
    <>
      <Background>
        <Wrapper>
          <Outlet />
          <Footer />
        </Wrapper>
      </Background>
    </>
  );
}
export default Layout;
