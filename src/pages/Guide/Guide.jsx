import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Margin from "../../Components/Margin/Margin";
import NavigationBar from "../../Components/Navigate/Navigate";
import consumerGuide from "./consumerGuide.svg";
import GuidePageimg from "./GuidePage2.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100%;
`;
const wrappervariants = {
  hidden: { x: 460 },
  load: { x: 0 },
};

export default function GuidePage() {
  const navigate = useNavigate();

  return (
    <Wrapper
      variants={wrappervariants}
      initial="hidden"
      animate="load"
      transition={{ type: "tween", duration: 0.3 }}
    >
      <Header left="logo" right={["login", "search"]} />
      <img alt="img" src={GuidePageimg} style={{ width: "100%" }} />
      <Margin height="120" />
      <NavigationBar />
    </Wrapper>
  );
}
