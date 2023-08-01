import styled from "styled-components";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Category from "../../Components/PopupCategory/PopupCategory";
import Margin from "../../Components/Margin/Margin";
import Typo from "../../assets/Typo";
import { useState, useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
`;
const Header = styled(motion.div)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  div:first-child {
    width: 33%;
    margin-right: auto;
    margin-left: 2rem;
  }
  div:nth-child(2) {
    width: 33%;
    display: flex;
    justify-content: center;
  }
  div:last-child {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 2rem;
  }
`;
const List = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  margin-top: 30px;
  padding: 0px 20px;
`;
const Tab = styled(motion.div)`
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
const showupvariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const listvariants = {
  hidden: { x: 460, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function ShowCate() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const ani = useAnimation();

  useEffect(() => {
    if (id) {
      ani.start("visible");
    } else {
      ani.start("hidden");
    }
  });

  return (
    <AnimatePresence>
      <Wrapper
        variants={CateVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 0.5 }}
      >
        {id === "" ? (
          <>
            <Margin height="30" />
            <Header>
              <motion.div
                variants={showupvariants}
                initial="hidden"
                animate={ani}
              >
                <MdArrowBackIosNew style={{ fontSize: 18 }} />
              </motion.div>
              <motion.div>
                <Typo fontType="large">POPCON</Typo>
              </motion.div>
              <motion.div onClick={() => navigate(-1)}>
                <AiOutlineClose style={{ fontSize: 18 }} />
              </motion.div>
            </Header>
            <List>
              <Tab onClick={() => setId("All")}>
                <Typo fontType="mediumsmall">All</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
              <Tab onClick={() => setId("스토어")}>
                <Typo fontType="mediumsmall">스토어</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
              <Tab onClick={() => setId("갤러리")}>
                <Typo fontType="mediumsmall">갤러리</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
              <Tab onClick={() => setId("스테이지")}>
                <Typo fontType="mediumsmall">스테이지</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
              <Tab onClick={() => setId("클래스")}>
                <Typo fontType="mediumsmall">클래스</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
            </List>
            <Margin height="15" />
          </>
        ) : null}
        {id ? (
          <>
            <Margin height="30" />
            <Header>
              <motion.div
                variants={showupvariants}
                initial="hidden"
                animate={ani}
                onClick={() => setId("")}
              >
                <MdArrowBackIosNew style={{ fontSize: 18 }} />
              </motion.div>
              <motion.div
                variants={showupvariants}
                initial="hidden"
                animate={ani}
              >
                <Typo fontType="large">{id}</Typo>
              </motion.div>
              <motion.div onClick={() => navigate(-1)}>
                <AiOutlineClose style={{ fontSize: 18 }} />
              </motion.div>
            </Header>
            <List
              variants={listvariants}
              initial="hidden"
              animate={ani}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <Tab onClick={() => setId("All")}>
                <Typo fontType="mediumsmall">All</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
              <Tab onClick={() => setId("스토어")}>
                <Typo fontType="mediumsmall">스토어</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
              <Tab onClick={() => setId("갤러리")}>
                <Typo fontType="mediumsmall">갤러리</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
              <Tab onClick={() => setId("스테이지")}>
                <Typo fontType="mediumsmall">스테이지</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
              <Tab onClick={() => setId("클래스")}>
                <Typo fontType="mediumsmall">클래스</Typo>
                <MdArrowForwardIos style={{ fontSize: 18 }} />
              </Tab>
            </List>
            <Margin height="15" />
          </>
        ) : null}
      </Wrapper>
    </AnimatePresence>
  );
}
export default ShowCate;