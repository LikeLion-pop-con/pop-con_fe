import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Background = styled.div`
  width: 768px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
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
