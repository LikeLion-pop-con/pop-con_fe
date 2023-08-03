import { styled } from "styled-components";
import Margin from "../Margin/Margin";
import Typo from "../../assets/Typo";
import home from "../../assets/Icons/NavigationBar/home.svg";
import category from "../../assets/Icons/NavigationBar/category.svg";
import back from "../../assets/Icons/NavigationBar/back.svg";
import like from "../../assets/Icons/NavigationBar/like.svg";
import my from "../../assets/Icons/NavigationBar/my.svg";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isCateClicked } from "../../atom";
import { BsArrowBarUp } from "react-icons/bs";

const Wrapper = styled(motion.div)`
  width: 450px;
  height: 60px;
  position: fixed;
  bottom: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainWrapper = styled(motion.div)`
  background-color: #ec7538;
`;
const IconsContainer = styled.div`
  top: 10px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const IconWrapper = styled.div`
  cursor: pointer;
  width: 60px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const navVariants = {
  visible: { y: 0 },
  hidden: {
    y: 80,
    transition: {
      duration: 0.3,
    },
  },
};
const btnVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    y: 80,
    opacity: 0,
  },
};
const ScrollToTopBtn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 5px;
  position: absolute;
  top: -3rem;
  right: 1rem;
  cursor: pointer;
`;

const Icon = ({ img, children, onClick }) => {
  return (
    <IconWrapper onClick={onClick}>
      {img === "empty" ? (
        <Margin width="14px" />
      ) : (
        <img src={img} style={{ width: "18px" }} />
      )}
      <Typo color="white" fontType="small">
        {children}
      </Typo>
    </IconWrapper>
  );
};

export default function NavigationBar({ hide, setIsCateClicked }) {
  const navigate = useNavigate();
  const navani = useAnimation();
  const btnani = useAnimation();

  const [isClicked, setIsClicked] = useRecoilState(isCateClicked);

  useEffect(() => {
    if (hide === "scrolling down") {
      navani.start("hidden");
      btnani.start("hidden");
    } else {
      navani.start("visible");
      btnani.start("visible");
    }
  }, [hide]);

  return (
    <Wrapper>
      <ScrollToTopBtn
        onClick={() => window.scrollTo(0, 0)}
        variants={btnVariants}
        initial="hidden"
        animate={btnani}
        transition={{
          type: "tween",
        }}
      >
        <BsArrowBarUp style={{ fontSize: 24 }} />
      </ScrollToTopBtn>
      <MainWrapper
        variants={navVariants}
        initial="visible"
        animate={navani}
        transition={{
          type: "tween",
        }}
      >
        <IconsContainer>
          <Icon onClick={() => navigate(-1)} img={back}>
            BACK
          </Icon>
          <Icon onClick={() => navigate("/category")} img={category}>
            CATEGORY
          </Icon>
          <Icon onClick={() => navigate("/main")} img={home}>
            HOME
          </Icon>
          <Icon onClick={() => navigate("/Mypage/MypopLike")} img={like}>
            LIKE
          </Icon>
          <Icon onClick={() => navigate("/Mypage")} img={my}>
            MY
          </Icon>
        </IconsContainer>
      </MainWrapper>
    </Wrapper>
  );
}
