import styled from "styled-components";
import { useLocation, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 20px;
`;
const Tab = styled.div`
  height: 20px;
  padding: 0px 10px;
  a {
    font-size: 14px;
    display: block;
    width: 100%;
    color: ${(props) =>
      props.match ? props.theme.colors.main : props.theme.colors.black};
  }
`;

function PageTabs() {
  const allowdMatch = useMatch("/");
  const ingMatch = useMatch("/ing");

  return (
    <Wrapper>
      <Tabs>
        <Tab match={allowdMatch?.pathname === "/"}>
          <Link to={`/`}>진행 중인 팝업</Link>
        </Tab>
        <Tab match={ingMatch?.pathname === "/ing"}>
          <Link to={`/ing`}>신청 중인 팝업</Link>
        </Tab>
      </Tabs>
      <Outlet />
    </Wrapper>
  );
}

export default PageTabs;
