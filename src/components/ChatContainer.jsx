import React, { useState } from 'react';
import ChatMessages from './ChatMessages';
import '../css/ChatContainer.css';

const App = ({ messages, setMessages }) => {

  return (
    <div className="baap">
      {/* <div className="chat-panel"> */}
      {/* <div className="chat-content"> */}
      <ChatMessages messages={messages} />
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default App;
