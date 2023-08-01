import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const TabsContainer = styled.div`
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
  width: 7rem;
  height: 20px;
  position: relative;
  margin: 0px 5px;
  a {
    font-size: 16px;
    display: block;
    width: 100%;
    color: ${(props) =>
      props.match ? props.theme.colors.main : props.theme.colors.black};
    opacity: ${(props) => (props.match ? 1 : 0.5)};
  }
`;
const StatusBar = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.theme.colors.main};
  width: 95%;
  height: 2px;
  bottom: -3px;
`;

function PageTabs({
  page1,
  page2,
  page3,
  page1link,
  page2link,
  page3link,
  cateId,
}) {
  const allowdMatch = useMatch(`/main/${cateId}${page1link}`);
  const ingMatch = useMatch(`/main/${cateId}${page2link}`);
  const otherMatch = useMatch(`/main/${cateId}${page3link}`);

  const [page, setPages] = useState([]);

  useEffect(() => {
    if (page1) {
      setPages((obj) => {
        return [...obj, page1];
      });
    }
    if (page2) {
      setPages((obj) => {
        return [...obj, page2];
      });
    }
    if (page3) {
      setPages((obj) => {
        return [...obj, page3];
      });
    }
  }, [page1, page2, page3]);

  return (
    <Wrapper>
      <TabsContainer>
        <Tabs tabs={page.length}>
          {page1 && (
            <Tab match={allowdMatch !== null}>
              <Link to={`/main/${cateId}${page1link}`}>{page1}</Link>
              {allowdMatch && <StatusBar layoutId="bar" />}
            </Tab>
          )}
          {page2 && (
            <Tab match={ingMatch !== null}>
              <Link to={`/main/${cateId}${page2link}`}>{page2}</Link>
              {ingMatch && <StatusBar layoutId="bar" />}
            </Tab>
          )}
          {page3 && (
            <Tab match={otherMatch !== null}>
              <Link to={`/main/${cateId}${page3link}`}>{page3}</Link>
              {otherMatch && <StatusBar layoutId="bar" />}
            </Tab>
          )}
        </Tabs>
      </TabsContainer>
      <Outlet
        context={{
          cateId,
        }}
      />
    </Wrapper>
  );
}

export default PageTabs;
