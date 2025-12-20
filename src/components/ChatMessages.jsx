import { useRef } from 'react';
import React, { useEffect } from 'react';
import '../css/ChatMessages.css';
import StreamingText from './StreamingText';

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
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
            msg.type === 'incoming' && msg.isStreaming !== undefined ? (
              <StreamingText text={msg.text} speed={30} />
            ) : (
              msg.text
            )
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
