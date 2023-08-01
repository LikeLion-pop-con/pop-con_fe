import { useMatch } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Margin from "../Margin/Margin";

const Wrapper = styled.div`
  width: 100%;
`;
const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 20px;
`;
const Tab = styled.div`
  width: 6rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin: 0px 14px;
  background-color: ${(props) =>
    props.match ? props.theme.colors.sub : props.theme.colors.white};
  border: ${(props) => (props.match ? "none" : "1px solid rgba(0,0,0,0.15)")};
  a {
    color: ${(props) =>
      props.match ? props.theme.colors.white : props.theme.colors.black};
  }
`;

function ArtistCategory() {
  const mainMatch = useMatch("/");
  const artMatch = useMatch("/art");
  const litMatch = useMatch("/lit");
  const videoMatch = useMatch("/video");
  const musicMatch = useMatch("/music");

  return (
    <Wrapper>
      <Tabs>
        <Tab match={mainMatch?.pathname === "/"}>
          <Link to={"/"}>전체</Link>
        </Tab>
        <Tab match={artMatch?.pathname === "/art"}>
          <Link to={"/art"}>그림</Link>
        </Tab>
        <Tab match={litMatch?.pathname === "/lit"}>
          <Link to={"/lit"}>문학</Link>
        </Tab>
        <Tab match={videoMatch?.pathname === "/video"}>
          <Link to={"/video"}>영상</Link>
        </Tab>
        <Tab match={musicMatch?.pathname === "/music"}>
          <Link to={"/music"}>음악</Link>
        </Tab>
      </Tabs>
      <Margin height="20" />
    </Wrapper>
  );
}
export default ArtistCategory;
