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
import { RiArrowDownSLine } from "react-icons/ri";
import PopupSlider from "../../Components/AdSlider/PopupSlider";
import Horizon from "../../Components/Horizon/Horizon";
import NavigationBar from "../../Components/Navigate/Navigate";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
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
  margin: 0px 20px;
  margin-top: 9rem;
`;
const Tab = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  height: 3rem;
  //border-bottom: 1px solid ${(props) => props.theme.colors.black};
  z-index: 10;
`;
const CateVariants = {
  hidden: { x: -460, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const showupvariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  back: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
const listvariants = {
  hidden: { x: 460, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 460, opacity: 0 },
};
const relistvariants = {
  initial: { x: -460, opacity: 0 },
  reload: { x: 0, opacity: 1 },
};
const DetailItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: top center;
`;
const DetailItem = styled(motion.div)`
  width: 90%;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const LogoWrap = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  width: 100%;
  position: absolute;
  top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderWrapper = styled.div`
  position: absolute;
  top: 5rem;
  flex-direction: row;
  align-items: left;
  justify-content: left;
`;

function ShowCate() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const ani = useAnimation();
  const backani = useAnimation();

  const [back, setBack] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleBack = () => {
    setId("");
    setBack((prev) => !prev);
  };

  useEffect(() => {
    if (id) {
      ani.start("visible");
    } else {
      ani.start("hidden");
    }
    if (back) {
      backani.start("reload");
    } else {
      backani.start("hidden");
    }
  }, [id, back]);

  return (
    <AnimatePresence>
      <Wrapper
        variants={CateVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 0.5 }}
      >
        <LogoWrap>
          <img src={"logo.png"} height="80" />
        </LogoWrap>
        {id === "" ? (
          <>
            <AnimatePresence>
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
                  <Typo size="22px">CATEGORY</Typo>
                </motion.div>
                <motion.div onClick={() => navigate(-1)}>
                  <AiOutlineClose style={{ fontSize: 18 }} />
                </motion.div>
              </Header>
              <List
                variants={relistvariants}
                initial={back && "initial"}
                animate={back && backani}
                transition={{
                  type: "tween",
                  duration: 0.5,
                }}
              >
                <Tab onClick={() => setId("POPUP")}>
                  <Typo fontType="mediumsmall">팝업</Typo>
                  <MdArrowForwardIos style={{ fontSize: 18 }} />
                </Tab>
                <Tab onClick={() => setId("BRAND")}>
                  <Typo fontType="mediumsmall">팝업 브랜드</Typo>
                  <MdArrowForwardIos style={{ fontSize: 18 }} />
                </Tab>
                <Tab onClick={() => setId("ARTIST")}>
                  <Typo fontType="mediumsmall">독립 아티스트</Typo>
                  <MdArrowForwardIos style={{ fontSize: 18 }} />
                </Tab>
                <Tab onClick={() => navigate("/Guide")}>
                  <Typo fontType="mediumsmall">POP-CON | 서비스 가이드</Typo>
                  <MdArrowForwardIos style={{ fontSize: 18 }} />
                </Tab>
              </List>
              <PopupSlider />
            </AnimatePresence>
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
                onClick={async () => {
                  await handleBack();
                }}
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
            <AnimatePresence>
              <List
                variants={listvariants}
                initial="hidden"
                animate={ani}
                transition={{ type: "tween", duration: 0.5 }}
              >
                <Tab onClick={() => setIsClicked((prev) => !prev)}>
                  <Typo fontType="mediumsmall">CATEGORY</Typo>
                  {isClicked ? (
                    <RiArrowDownSLine style={{ fontSize: 24 }} />
                  ) : (
                    <MdArrowForwardIos style={{ fontSize: 18 }} />
                  )}
                </Tab>
                <DetailItems
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: isClicked ? 1 : 0 }}
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                >
                  {id === "POPUP" && (
                    <>
                      <DetailItem>
                        <Typo size="15px">All</Typo>
                      </DetailItem>
                      <DetailItem
                        onClick={() =>
                          navigate(`/main/${1}`, { state: { type: id } })
                        }
                      >
                        <Typo size="15px">스토어</Typo>
                      </DetailItem>
                      <DetailItem>
                        <Typo size="15px">갤러리</Typo>
                      </DetailItem>
                      <DetailItem>
                        <Typo size="15px">스테이지</Typo>
                      </DetailItem>
                      <DetailItem>
                        <Typo size="15px">클래스</Typo>
                      </DetailItem>
                    </>
                  )}
                  {id === "BRAND" && ( // 1, 2, 3, 4, 5
                    <>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${1}`, {
                            state: {
                              title: "푸드",
                            },
                          })
                        }
                      >
                        <Typo size="15px">푸드</Typo>
                      </DetailItem>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${2}`, {
                            state: {
                              title: "패션 잡화",
                            },
                          })
                        }
                      >
                        <Typo size="15px">패션 잡화</Typo>
                      </DetailItem>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${3}`, {
                            state: {
                              title: "테크 가전",
                            },
                          })
                        }
                      >
                        <Typo size="15px">테크 가전</Typo>
                      </DetailItem>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${4}`, {
                            state: {
                              title: "뷰티",
                            },
                          })
                        }
                      >
                        <Typo size="15px">뷰티</Typo>
                      </DetailItem>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${5}`, {
                            state: {
                              title: "클래스",
                            },
                          })
                        }
                      >
                        <Typo size="15px">클래스</Typo>
                      </DetailItem>
                    </>
                  )}
                  {id === "ARTIST" && ( // 6, 7, 8, 9
                    <>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${6}`, {
                            state: {
                              title: "그림",
                            },
                          })
                        }
                      >
                        <Typo size="15px">그림</Typo>
                      </DetailItem>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${7}`, {
                            state: {
                              title: "문학",
                            },
                          })
                        }
                      >
                        <Typo size="15px">문학</Typo>
                      </DetailItem>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${8}`, {
                            state: {
                              title: "영상",
                            },
                          })
                        }
                      >
                        <Typo size="15px">영상</Typo>
                      </DetailItem>
                      <DetailItem
                        onClick={() =>
                          navigate(`/category/${9}`, {
                            state: {
                              title: "음악",
                            },
                          })
                        }
                      >
                        <Typo size="15px">음악</Typo>
                      </DetailItem>
                    </>
                  )}
                </DetailItems>
              </List>
            </AnimatePresence>
            <Margin height="15" />
          </>
        ) : null}
      </Wrapper>
    </AnimatePresence>
  );
}
export default ShowCate;
