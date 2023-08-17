import { styled } from "styled-components";
//import logo from ''
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Icons/Header/logo.png";
import { motion, useAnimation } from "framer-motion";

const Back = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
  min-height: 100vh; //푸터때매 글로벌스타일로 안채워져서 일단 헤이트를 100vh로 했음
  display: flex;
  justify-content: center;
  align-items: center;
`;

const backvariants = {
  hidden: { backgroundColor: "rgba(236, 117, 56, 1)" },
  visible: {
    backgroundColor: "rgba(255,255,255,1)",
    transition: { type: "tween", duration: 2, delay: 1 },
  },
};

export default function LogoWelcome() {
  const navigate = useNavigate();

  const backani = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 페이지 전환코드
      const usertype = localStorage.getItem("UserType");
      if (usertype === "2") {
        navigate("/adminmain"); // usertype이 2일 경우 adminmain으로 이동
      } else {
        navigate("/main"); // usertype이 2가 아닐 경우 main으로 이동
      }
    }, 3000);
    backani.start("visible");

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
    };
  }, []);

  return (
    <Back variants={backvariants} initial="hidden" animate={backani}>
      <img width="200" height="200" src={logo} />
    </Back>
  );
}
