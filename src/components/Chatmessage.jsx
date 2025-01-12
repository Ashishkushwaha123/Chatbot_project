import React from 'react'
import Chatboticon from './Chatboticon';

const ChatMessage = ({chat}) => {
  return (
    <div className={`message ${chat.role === "mode1" ? 'bot':'user'}-message`}>
        {chat.role==="mode1" && <Chatboticon/>}
            <p className="message-text">{chat.text}</p>
          </div>
  );
};

export default ChatMessage