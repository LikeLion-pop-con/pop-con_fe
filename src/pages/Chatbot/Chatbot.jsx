import React from "react";
import styled, { ThemeProvider } from "styled-components";
import ChatBot, { triggerNextStep } from "react-simple-chatbot";
import { AiOutlineClose } from "react-icons/ai";
import CheckBox from "./Checkbox.js";
import ChatbotModal from "react-modal";
import { useRecoilState } from "recoil";
import { isBotClicked } from "../../atom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { MdOutlineMoveToInbox } from "react-icons/md";
import Margin from "../../Components/Margin/Margin.jsx";
import Input from "./SpaceEnroll.jsx";
import Input2 from "./SpaceGive.jsx";
import Input3 from "./Select.jsx";
import Input4 from "./Slelect2.jsx";
import Askbutton from "./Askbutton.jsx";
const steps = [
  /////////////////////////////////////////////////////////////////// 질문 카테고리 선택
  {
    id: "1",
    message: "안녕하세요. 오프라인 팝업 POPCON 입니다.",
    trigger: "2",
  },
  {
    id: "2",
    message:
      "POPCON에 궁금한 점이 있거나 문의하고자 하는 사항이 있다면 아래의 버튼을 눌러 의견을 남겨주세요!",
    trigger: "3",
  },
  {
    id: "3",
    message: "최대한 빠르게 답변 드리겠습니다.",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: "spaceenroll", label: "공간 등록", trigger: "5" },
      { value: "spacegive", label: "공간 대관", trigger: "6" },
      { value: "cardenroll", label: "카드 등록", trigger: "7" },
      { value: "popup", label: "팝업", trigger: "17" },
    ],
  },
  /////////////////////////////////////////////////////////////////// 넓은 범위 카테고리 선택 확인 메시지
  {
    id: "5",
    message: "공간 등록을 선택하셨습니다.",
    trigger: "8",
  },
  {
    id: "6",
    message: "공간 대관을 선택하셨습니다.",
    trigger: "9",
  },
  {
    id: "7",
    message: "카드 등록을 선택하셨습니다.",
    trigger: "10",
  },
  /////////////////////////////////////////////////////////////////// 세부 질문 카테고리 안내 메시지
  {
    id: "8",
    message: "등록을 원하는 공간의 정보를 기입해주세요.",
    trigger: "11",
  },
  {
    id: "9",
    message: "문의 주셔서 감사합니다!",
    trigger: "spacegive",
  },
  {
    id: "spacegive",
    message: "공간 대관을 위해 추가 정보 작성 부탁드립니다!",
    trigger: "spacegivenext",
  },
  {
    id: "spacegivenext",
    message: "상담에 앞서 행사 관련 추가 정보 작성 부탁드립니다.",
    trigger: "12",
  },
  {
    id: "10",
    message: "PopCon에서 진행하는 팝업을 예매하고자 한다면 카드 등록이 필요합니다. 카드 등록을 한 후 간편 결제를 진행하시겠습니까?",
    trigger: "13",
  },
  /////////////////////////////////////////////////////////////////// 세부 질문 카테고리 선택
  {
    id: "11",
    component:<Input triggerNext={triggerNextStep} />,
    waitAction: true,
    trigger: "14",
  },
  {
    id: "12",
    component: <Input2 triggerNext={triggerNextStep}/>,
    waitAction: true,
    trigger: "14",
  },
  /////////////////////////////////////////////////////////////////// 챌린지 답변
  {
    id: "13",
    message: "카드 번호 입력 받기 (그냥 정보만 입력 해주삼 ㅋㅋ )",
    trigger: "16",
  },
  {
    id: "14",
    message: "공간의 상세 정보 (ex. 공간 사진, 특징 등) 및 문의 사항을 자유롭게 작성해 주세요! 담당자 확인 후 영업일 2일 이내 연락 드리겠습니다.",
    trigger: "15",
  },
  {
    id: "15",
    component: <Input3 triggerNext={triggerNextStep}/>,
    waitAction: true,
    trigger: "23",
  },
  {
    id: "16",
    component: <Input4 triggerNext={triggerNextStep}/>,
    waitAction: true,
    trigger: "23",
  },
  {
    id: "17",
    message: "팝업과 관련된 정보는 직접 문의주세요!",
    trigger: "23",
  },
  /////////////////////////////////////////////////////////////////// 인바디 답변

  /////////////////////////////////////////////////////////////////// 평가 체크리스트
  {
    id: "23",
    message: "추가로 문의하실게 있다면 아래 버튼을 눌러주세요!",
    trigger: "24",
  },
  {
    id: "24",
    component: <Askbutton triggerNext={triggerNextStep} />, 
    waitAction: true,
    trigger: "25",
  },
  {
    id: "25",
    message: "마지막으로 저의 쳇봇 서비스를 평가 해주세요",
    trigger: "26",
  },
  {
    id: "26",
    component: <CheckBox />,
    waitAction: true,
    trigger: "27",
  },
  {
    id: "27",
    message: "감사합니다.",
    end: true,
  },
];
const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const ExitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 7%;
  top: 5%;
  width: 30px;
  height: 30px;
  z-index: 1000;
  &:hover {
    cursor: pointer;
  }
`;
const Chatbot = ({ setModal }) => {
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "white",
    headerFontColor: "black",
    headerFontSize: "15px",
    botBubbleColor: "#EC7538",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };
  const [isClicked, setIsClicked] = useRecoilState(isBotClicked);
  // const botani = useAnimation();

  // useEffect(() => {
  //   if (isClicked) {
  //     botani.start("visible");
  //   } else {
  //     botani.start("hidden");
  //   }
  // }, [isClicked]);

  return (
    <ChatbotModal
      isOpen={isClicked}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      overlayElement={(props, contentElement) => (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween" }}
          isOpen={isClicked}
          {...props}
        >
          {contentElement}
        </motion.div>
      )}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.3)",
          touchAction: "none",
        },
        content: {
          width: "360px",
          position: "relative",
          top: 30,
          left: 0,
          right: 0,
          margin: "auto auto",
          display: "flex",
          overflow: "hidden",
          border: "medium none black",
          justifyContent: "center",
          flexWrap: "wrap",
          whiteSpace: "pre-wrap",
          alignContent: "center",
          borderRadius: "20px",
          backgroundColor: "transparent",
        },
      }}
    >
      <ExitBtn onClick={() => setIsClicked(false)}>
        <AiOutlineClose style={{ fontSize: 22 }} />
      </ExitBtn>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          hideHeader={false}
        
          headerTitle="POP-CON ChatBot"
          placeholder={"채팅이 불가능한 채널입니다."}
          customComponents={{
            input: (props) => <Input {...props} triggerNext={props.triggerNextStep} />,
          }}
        />
      </ThemeProvider>
    </ChatbotModal>
  );
};
export default Chatbot;
