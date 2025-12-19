import React from 'react';
import ChatMessages from './ChatMessages';
import '../css/ChatContainer.css';

const App = ({ messages, setMessages }) => {

  return (
    <div className="main-chat-container">
      <ChatMessages messages={messages} />
    </div>
  );
};

export default App;
