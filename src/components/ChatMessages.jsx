import React from 'react';
import '../css/ChatMessages.css';

const ChatMessages = ({ messages }) => {
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-messages-container">
      {messages?.map((msg, index) => (
        <div
          key={index}
          className={`chat-message ${msg.type === 'incoming' ? 'incoming' : 'outgoing'} ${msg.isLive ? 'live' : ''}`}
        >
          {msg.text === '...' ? (
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            msg.text
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
