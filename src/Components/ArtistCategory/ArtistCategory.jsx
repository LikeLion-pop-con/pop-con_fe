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

function ArtistCategory({ handleCategoryClick }) {
  const mainMatch = useMatch("/");
  const artMatch = useMatch("/art");
  const litMatch = useMatch("/lit");
  const videoMatch = useMatch("/video");
  const musicMatch = useMatch("/music");
  return (
    <Wrapper>
      <Tabs>
        <Tab active={mainMatch?.pathname === "/"} onClick={() => handleCategoryClick("/")}>
          <a>전체</a>
        </Tab>
        <Tab active={artMatch?.pathname === "/art"} onClick={() => handleCategoryClick("/art")}>
          <a>그림</a>
        </Tab>
        <Tab active={litMatch?.pathname === "/lit"} onClick={() => handleCategoryClick("/lit")}>
          <a>문학</a>
        </Tab>
        <Tab active={videoMatch?.pathname === "/video"} onClick={() => handleCategoryClick("/video")}>
          <a>영상</a>
        </Tab>
        <Tab active={musicMatch?.pathname === "/music"} onClick={() => handleCategoryClick("/music")}>
          <a>음악</a>
        </Tab>
      </Tabs>
      <Margin height="20" />
    </Wrapper>
  );
}

export default ArtistCategory;