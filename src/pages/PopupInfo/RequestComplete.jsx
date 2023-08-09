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

function RequestComplete() {
  const complete = () =>
    toast.success(
      (t) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>팝업 신청이 완료되었습니다 !!</p>
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
        <PopupCard
          image={PopupCardimg1}
          title={"IAB STUDIO 팝업 요청되었습니다."}
        />
      </motion.div>
    </>
  );
}
export default RequestComplete;
