import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import ShowCate from "../../pages/CategoryPage/ShowCate";

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

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

function Layout() {
  return (
    <>
      <Background>
        <Outlet />
      </Background>
    </>
  );
}
export default Layout;
