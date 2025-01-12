import React, { useState } from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom';

function 
Home() {
  const [chatStarted, setChatStarted] = useState(false);
  const navigate=useNavigate();


  const startChat = () => {
    setChatStarted(!chatStarted);
  };

  return (
    <div className="home-section">

      <Routes>

      </Routes>

      {!chatStarted ? 
        <div  className="intro">
          <div>
          <h2>Welcome to the Chatbot!</h2>
          <p>
          Ask Anything, Anytime. I am your personal assistent!
          </p>
          <div className='btn'>
          <button onClick={()=> navigate("/chatbot")}>Start Chat</button>
          </div>
        </div>
        </div>
      : 
        <div className="chat-interface">
          {/* The chatbot component or interface will go here */}
          <p>Chatbot is starting...</p>
        </div>
      }
    </div>
  );
}

export default Home;

