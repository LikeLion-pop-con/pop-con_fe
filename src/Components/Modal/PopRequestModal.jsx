import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/Icons/Header/logo.png";
import Typo from "../../assets/Typo";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isPopupRequestNo, isPopupRequestYes } from "../../atom";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 330px;
  height: 200px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;
const Header = styled.div`
  width: 100%;
  height: 30px;
`;
const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다
  padding: 10px;
`;
const TextWrap = styled.div`
  margin-top: 35px;
`;
const Confirm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
`;

function RequestModal() {
  const navigate = useNavigate();

  const [isYesClicked, setYesClicked] = useRecoilState(isPopupRequestYes);
  const setNoClicked = useSetRecoilState(isPopupRequestNo);

  return (
    <Wrapper
      animate={{ scale: isYesClicked ? 0 : 1 }}
      transition={{
        type: "tween",
        duration: 0.3,
      }}
    >
      <Header>
        <Icon
          src={logo}
          width="30"
          height="30"
          alt="logo"
          onClick={() => navigate("/AdminMain")}
        />
      </Header>
      <TextWrap>
        <Typo style={{ display: "inline" }} size="18px" weight="400">
          가입하신 주소로&nbsp;&nbsp;
        </Typo>
        <Typo
          style={{ display: "inline", color: "#ec7538" }}
          size="20px"
          weight="600"
        >
          팝업 요청&nbsp;
        </Typo>
        <Typo style={{ display: "inline" }} size="18px" weight="400">
          을 할까요?
        </Typo>
      </TextWrap>
      <Confirm>
        <Typo
          onClick={() => navigate("complete")}
          width="100"
          style={{
            textAlign: "center",
            boxShadow: "0px 5px 3px -6px rgba(0,0,0,0.7)",
            padding: 7,
            cursor: "pointer",
          }}
          fontType="title"
        >
          Yes
        </Typo>
        <Typo
          onClick={() => navigate(-1)}
          width="100"
          style={{
            textAlign: "center",
            boxShadow: "0px 5px 3px -6px rgba(0,0,0,0.7)",
            padding: 7,
            cursor: "pointer",
          }}
          fontType="title"
        >
          No
        </Typo>
      </Confirm>
    </Wrapper>
  );
}
export default RequestModal;
