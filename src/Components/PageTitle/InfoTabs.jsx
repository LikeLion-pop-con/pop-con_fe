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
  justify-content: center;
  align-items: center;
`;
const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1.5rem 0;
  width: 100%;
`;
const Tab = styled.div`
  width: 90%;
  padding: 1rem 0;
  position: relative;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  a {
    font-size: px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${(props) =>
      props.match ? props.theme.colors.main : props.theme.colors.black};
    opacity: ${(props) => (props.match ? 1 : 0.5)};
  }
`;
const StatusBar = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.theme.colors.main};
  width: 80%;
  height: 2px;
  bottom: 0;
`;

function InfoTabs({ page1, page2, page3, brandId }) {
  const introMatch = useMatch(`/brand/${brandId}`);
  const infoMatch = useMatch(`/brand/${brandId}/info`);
  const postMatch = useMatch(`/brand/${brandId}/post`);

  return (
    <Wrapper>
      <TabsContainer>
        <Tabs>
          <Tab match={introMatch !== null}>
            <Link to={`/brand/${brandId}`}>{page1}</Link>
            {introMatch && <StatusBar layoutId="bar" />}
          </Tab>
          <Tab match={infoMatch !== null}>
            <Link to={`/brand/${brandId}/info`}>{page2}</Link>
            {infoMatch && <StatusBar layoutId="bar" />}
          </Tab>

          <Tab match={postMatch !== null}>
            <Link to={`/brand/${brandId}/post`}>{page3}</Link>
            {postMatch && <StatusBar layoutId="bar" />}
          </Tab>
        </Tabs>
      </TabsContainer>
      <Outlet
        context={{
          brandId,
        }}
      />
    </Wrapper>
  );
}

export default InfoTabs;
