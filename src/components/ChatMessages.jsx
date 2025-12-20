import { useRef } from 'react';
import React, { useEffect } from 'react';
import '../css/ChatMessages.css';
import StreamingText from './StreamingText';

const ChatMessages = ({ messages, onTypingComplete }) => {
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
              <StreamingText
                text={msg.text}
                speed={15}
                isStreamComplete={!msg.isStreaming}
                onComplete={() => {
                  // Only trigger completion if this is the last message (active one) and stream is done
                  if (index === messages.length - 1 && onTypingComplete) {
                    onTypingComplete();
                  }
                }}
              />
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
