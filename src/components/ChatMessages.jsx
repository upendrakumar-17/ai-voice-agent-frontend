import React from 'react';
import '../css/ChatMessages.css';

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`chat-message ${msg.type === 'incoming' ? 'incoming' : 'outgoing'}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
