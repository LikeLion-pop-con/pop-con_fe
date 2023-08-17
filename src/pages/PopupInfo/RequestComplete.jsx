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

function RequestComplete({ image, title, userId, placeKey, basementFloor, groundFloor, formattedDate, reservedDate }) {
  const complete = () =>
    toast.success(
      (t) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>팝업 신청이 완료되었습니다 !!</p>
          <p>User ID: {userId}</p>
          <p>Place Key: {placeKey}</p>
          <p>Basement Floor: {basementFloor}</p>
          <p>Ground Floor: {groundFloor}</p>
          <p>Formatted Date: {formattedDate}</p>
          <p>Reserved Date: {reservedDate}</p>
        </div>
      ),
      {
        duration: 3000,
        style: {
          marginTop: 50,
          width: "20%",
        },
      }
    );

  useEffect(() => {
    // setTimeout(() => complete(), 1000);
  }, []);

  return (
    <>
      <motion.div variants={popupcardvariants} initial="hidden" animate="load">
        <PopupCard image={image} title={`${title}`} />
      </motion.div>
    </>
  );
}
export default RequestComplete;
