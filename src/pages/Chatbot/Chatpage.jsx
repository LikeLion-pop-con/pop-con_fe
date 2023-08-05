import React, { useState } from "react";
import Chatbot from "./Chatbot"; // Chatbot 컴포넌트의 경로에 맞게 수정하세요.

const ChatPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  // Chatbot 모달을 열고 닫는 함수
  const toggleChatbotModal = (e) => {
    setIsModalOpen((prev) => !prev);
    setModalPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      {/* Chatbot 열기 버튼 또는 아이콘 */}
      <button onClick={toggleChatbotModal}>Chatbot 열기</button>

      {/* Chatbot 모달 */}
      {isModalOpen && (
        <Chatbot/>
      )}
    </div>
  );
};

export default ChatPage;
