import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { adImgs } from "../../atom";
import { AnimatePresence, motion } from "framer-motion";
import Margin from "../Margin/Margin";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
const Items = styled(motion.div)`
  width: 100%;
`;
const Item = styled(motion.div)`
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 200px;
  position: absolute;
`;
const itemsVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 3,
      repeat: Infinity,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    delay: 3,
  },
  exit: {
    opacity: 0,
  },
};

function AdSlider() {
  const adimgs = useRecoilValue(adImgs);

  return (
    <Wrapper>
      <Margin height="10" />
      <AnimatePresence>
        <Items variants={itemsVariants} initial="hidden" animate="visible">
          {adimgs.map((i, index) => {
            return <Item variants={itemVariants} bgimg={adimgs[index]}></Item>;
          })}
        </Items>
      </AnimatePresence>
    </Wrapper>
  );
}
export default AdSlider;
