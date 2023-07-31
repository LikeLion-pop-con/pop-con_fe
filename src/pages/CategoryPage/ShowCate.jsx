import styled from "styled-components";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Category from "../../Components/PopupCategory/PopupCategory";
import Margin from "../../Components/Margin/Margin";
import Typo from "../../assets/Typo";
import { useState, useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useRecoilValue } from "recoil";
import { isCateClicked } from "../../atom";

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-left: 10px;
  }
`;
const ListsContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  div:nth-child(${(props) => props.id}) {
    background-color: ${(props) => props.theme.colors.main};
    p {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
const Item = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.main};
  &:first-child,
  &:nth-child(2) {
    border-bottom: none;
  }
`;
const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
const Img = styled.img`
  width: 90%;
  height: 8rem;
  border-radius: 2rem;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  margin-top: 30px;
  padding: 0px 10px;
`;
const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 3rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
`;
const CateVariants = {
  hidden: { x: -460, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function ShowCate() {
  const navigate = useNavigate();
  const [id, setId] = useState(1);

  // const cateani = useAnimation();
  // const isClicked = useRecoilValue(isCateClicked);

  // useEffect(() => {
  //   if (isClicked) {
  //     cateani.start("visible");
  //   } else {
  //     cateani.start("hidden");
  //   }
  // }, [isClicked]);

  return (
    <Wrapper
    // variants={CateVariants}
    // initial="hidden"
    // animate={cateani}
    // transition={{ type: "tween" }}
    >
      <SearchDiv>
        <AiOutlineArrowLeft
          onClick={() => navigate(-1)}
          style={{ fontSize: 28 }}
        />
        <SearchBar />
      </SearchDiv>

      <Category listid="cate" />
      <ListsContainer>
        <Col id={id}>
          <Item onClick={() => setId(1)}>
            <Typo>팝업</Typo>
          </Item>
          <Item onClick={() => setId(2)}>
            <Typo>팝업 브랜드</Typo>
          </Item>
          <Item onClick={() => setId(3)}>
            <Typo>독립 아티스트</Typo>
          </Item>
        </Col>
        <Col>
          <PostCard>
            <Img src="img/Artistimg/rose.jpg  "></Img>
            <Margin height="10" />
            <Typo fontType="medium">단독! 로제 블랙핑크 탈퇴 선언</Typo>
          </PostCard>
          <List>
            <Tab>
              <Typo fontType="mediumsmall">All</Typo>
              <MdArrowForwardIos style={{ fontSize: 18 }} />
            </Tab>
            <Tab>
              <Typo fontType="mediumsmall">스토어</Typo>
              <MdArrowForwardIos style={{ fontSize: 18 }} />
            </Tab>
            <Tab>
              <Typo fontType="mediumsmall">갤러리</Typo>
              <MdArrowForwardIos style={{ fontSize: 18 }} />
            </Tab>
            <Tab>
              <Typo fontType="mediumsmall">스테이지</Typo>
              <MdArrowForwardIos style={{ fontSize: 18 }} />
            </Tab>
            <Tab>
              <Typo fontType="mediumsmall">클래스</Typo>
              <MdArrowForwardIos style={{ fontSize: 18 }} />
            </Tab>
          </List>
        </Col>
      </ListsContainer>
      <Margin height="15" />
    </Wrapper>
  );
}
export default ShowCate;
