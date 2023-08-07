import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isBotClicked } from "../../atom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Chatbot from "../../pages/Chatbot/Chatbot";

const Background = styled.div`
  width: 40vw;
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 770px) {
    width: 100%;
  }
  //position: relative;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  background-color: transparent;
  box-sizing: border-box;

  min-width: 40vw;
  @media (max-width: 768px) {
    width: 80%;
  }
  height: 400px;
  z-index: 10;
  bottom: 14rem;
  border-radius: 30px;
  transform-origin: bottom right;
`;
const botvariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

function Layout() {
  const botani = useAnimation();

  const [isClicked, setIsClicked] = useRecoilState(isBotClicked);

  // useEffect(() => {
  //   if (isClicked) {
  //     botani.start("visible");
  //   } else {
  //     botani.start("hidden");
  //   }
  // }, [isClicked]);

  return (
    <>
      <Background>
        {/* <Overlay
          variants={botvariants}
          initial="hidden"
          animate={botani}
          transition={{
            type: "tween",
          }}
        > */}
        <motion.div
          style={{ transformOrigin: "center right" }}
          initial={{ scale: 0 }}
          animate={{ scale: isClicked ? 1 : 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          <Chatbot setModal={setIsClicked}></Chatbot>
        </motion.div>
        {/* </Overlay> */}
        <Outlet />
      </Background>
    </>
  );
}
export default Layout;
