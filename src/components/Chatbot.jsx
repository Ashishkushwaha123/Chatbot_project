import { useState } from "react";
import Chatboticon from "./Chatboticon";
import { RiArrowDownSLine } from "react-icons/ri";
import Chatform from "./Chatform";
import React from 'react';
import "./chatbody.css"

const Chatbot=()=>{
const [chatHistory, setChatHistory]=useState([]); 

const generateBotResponse= async (history)=>{
  // Helper function to update chat history
  const updateHistory = (text) => {
    setChatHistory(prev => [...prev.filter(msg=>msg.text !=="Thinking..."),{role:"model", text}]);
  };
// Format chat history for API request
  history=history.map(({role, text})=>({role, parts:[{text}]}));
   const requestOptions={
    method: "POST",
    // mode: 'no-cors',
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({contents: history })
   }

   try{
    // Make the API call to get the bot's response
    const response = await fetch(import.meta.env.VITE_API, requestOptions);
    const data = await response.json();
    console.log(data);
    if(!response.ok) throw new Error(data.error.message || "Something went wrong!");

    // Clean and update chat history with bot's response
    const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
    updateHistory(apiResponseText);
   }catch(err){
     console.log(err);
   }
};

  return (
    
    <div className="container">
        <div className="chatbot-popup">

          {/*Chatbot Header*/}
          <div className="chat-header">
            <div className="header-info">
              <Chatboticon />
              <h2 className="logo-text">Chatbot</h2>
            </div>
            <button
              className="icon"><RiArrowDownSLine />
            </button>
          </div>

          <div className="chat-body">
            <div className="message bot-message">
              <Chatboticon />
              <p className="message-text">
                Hey there <br /> How can I help you?
              </p>
            </div>

            {/* Render the chat history dynamically */}
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`message ${chat.role === "model" ? "bot-message" : "user-message"}`}
              >
                {chat.role === "model" ? <Chatboticon /> : null}
                <p className="message-text">{chat.text}</p>
              </div>
            ))}
          </div>
          {/*Chatbot Footer */}
          <div className="chat-footer">
            <Chatform chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
          </div>
        </div>
      </div>
  );
};

export default Chatbot;
