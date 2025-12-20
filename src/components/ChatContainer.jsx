import React from 'react';
import ChatMessages from './ChatMessages';
import '../css/ChatContainer.css';

const App = ({ messages, setMessages, onTypingComplete }) => {

  return (
    <div className="main-chat-container">
      <ChatMessages messages={messages} onTypingComplete={onTypingComplete} />
    </div>
  );
};

export default App;
