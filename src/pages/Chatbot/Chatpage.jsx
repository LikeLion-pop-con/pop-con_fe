import React, { useState } from "react";
import Chatbot from "./Chatbot"; // Chatbot 컴포넌트의 경로에 맞게 수정하세요.

const ChatPage = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State variable to track Chatbot visibility

  // Function to toggle Chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      <button onClick={toggleChatbot}>Open Chatbot</button>

      {/* Conditionally render the Chatbot */}
      {isChatbotOpen && <Chatbot setIsChatbotOpen={setIsChatbotOpen} />}
    </div>
  );
};

export default ChatPage;
