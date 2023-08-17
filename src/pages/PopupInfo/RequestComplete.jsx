import styled from "styled-components";
import PopupCard from "../../Components/Card/PopupCard";
import { motion } from "framer-motion";
import PopupCardimg1 from "../../assets/Icons/Card/PopupCardimg1.png";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const popupcardvariants = {
  hidden: { scale: 0 },
  load: {
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      delay: 0.5,
    },
  },
};

function RequestComplete({
  image,
  title,
  userId,
  placeKey,
  basementFloor,
  groundFloor,
  formattedDate,
  reservedDate,
  isSpace,
}) {
  useEffect(() => {
    // setTimeout(() => complete(), 1000);
  }, []);

  return (
    <>
      <motion.div style={{zIndex: 1000}} variants={popupcardvariants} initial="hidden" animate="load">
        <PopupCard image={image} title={`${title}`} />
      </motion.div>
    </>
  );
}
export default RequestComplete;
