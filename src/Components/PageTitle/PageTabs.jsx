import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.tabs}, 1fr);
  margin: 20px 20px;
`;
const Tab = styled.div`
  height: 20px;
  margin: 0px 10px;
  position: relative;
  a {
    font-size: 14px;
    display: block;
    width: 100%;
    color: ${(props) =>
      props.match ? props.theme.colors.main : props.theme.colors.black};
  }
`;
const StatusBar = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.theme.colors.main};
  width: 100%;
  height: 2px;
  bottom: 0;
`;

function PageTabs({ page1, page2, page3, page1link, page2link, page3link }) {
  const allowdMatch = useMatch("/");
  const ingMatch = useMatch("/ing");
  const otherMatch = useMatch(`/${page3link}`);

  const [page, setPages] = useState([]);

  useEffect(() => {
    setPages([page1, page2 || null, page3 || null]);
  }, [page1, page2, page3]);

  return (
    <Wrapper>
      <Tabs tabs={page.length}>
        {page1 && (
          <Tab match={allowdMatch?.pathname === `/${page1link}`}>
            <Link to={`/${page1link}`}>{page1}</Link>
            {allowdMatch && <StatusBar layoutId="bar" />}
          </Tab>
        )}
        {page2 && (
          <Tab match={ingMatch?.pathname === `/${page2link}`}>
            <Link to={`/${page2link}`}>{page2}</Link>
            {ingMatch && <StatusBar layoutId="bar" />}
          </Tab>
        )}
        {page3 && (
          <Tab match={otherMatch?.pathname === `/${page3link}`}>
            <Link to={`/${page3link}`}>{page3}</Link>
            {otherMatch && <StatusBar layoutId="bar" />}
          </Tab>
        )}
      </Tabs>
      <Outlet />
    </Wrapper>
  );
}

export default PageTabs;
