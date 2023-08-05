import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isBotClicked } from "../../atom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Chatbot from "../../pages/Chatbot/Chatbot";
import { AiOutlineClose } from "react-icons/ai";

const Background = styled.div`
  width: 450px;
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100vw;
  }
  position: relative;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  min-width: 40vw;
  @media (max-width: 768px) {
    width: 80%;
  }
  height: 400px;
  z-index: 10;
  bottom: 8rem;
  border-radius: 30px;
  transform-origin: bottom right;
`;
const botvariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
const ExitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

function Layout() {
  const [isClicked, setIsClicked] = useRecoilState(isBotClicked);

  const botani = useAnimation();

  useEffect(() => {
    if (isClicked) {
      botani.start("visible");
    } else {
      botani.start("hidden");
    }
  }, [isClicked]);

  return (
    <>
      <Background>
        <Overlay
          variants={botvariants}
          initial="hidden"
          animate={botani}
          transition={{
            type: "tween",
          }}
        >
          <ExitBtn onClick={() => setIsClicked((prev) => !prev)}>
            <AiOutlineClose style={{ fontSize: 22 }} />
          </ExitBtn>
        </Overlay>
        <Outlet />
      </Background>
    </>
  );
}
export default Layout;
