import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Margin from "../../Components/Margin/Margin";
import NavigationBar from "../../Components/Navigate/Navigate";
import consumerGuide from "./consumerGuide.svg";
import GuidePageimg from "./GuidePage2.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div``;

export default function GuidePage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <img alt="img" src={GuidePageimg} style={{ width: "100%" }} />

      <Margin height="120" />
      <NavigationBar />
    </Wrapper>
  );
}
