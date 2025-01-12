import React from 'react'
import { useRef } from 'react';
import { FaArrowUp } from "react-icons/fa";

const Chatform = ({chatHistory,setChatHistory,generateBotResponse}) => {
    const inputRef=useRef();

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";

       //Update chat history with the user's message
       setChatHistory((history)=>[...history, {role:"user", text:userMessage}]);

       //Delay 600 ms before showing "Thinking..." and generating response
       setTimeout(()=>{
        //Add a "Thinking..." placeholder for the bot's response
        setChatHistory((history)=>[...history,{role:"model", text:"Thinking..."}]);

       //call the function to generate the bot's response
       generateBotResponse([...chatHistory,{role:"user",text:userMessage}]);
       },600);
    };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
                <input  ref={inputRef} type="text" placeholder="Message..."
                className="message-input" required/>
                <button  className="icon"><FaArrowUp/></button>  
              </form>
  );
};

export default Chatform