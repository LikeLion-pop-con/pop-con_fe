import styled from "styled-components";
import PopupCard from "../../Components/Card/PopupCard";
import { motion } from "framer-motion";
import PopupCardimg1 from "../../assets/Icons/Card/PopupCardimg1.png";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
const popupcardvariants = {
  hidden: { scale: 0 },
  load: {
    scale: 1,
    transition: {
      type: "spring",
      damping: 5,
      delay: 0.5,
    },
  },
};

function RequestComplete() {
  return (
    <Overlay>
      <motion.div variants={popupcardvariants} initial="hidden" animate="load">
        <PopupCard
          image={PopupCardimg1}
          title={"IAB STUDIO 팝업 요청되었습니다."}
        />
      </motion.div>
    </Overlay>
  );
}
export default RequestComplete;
