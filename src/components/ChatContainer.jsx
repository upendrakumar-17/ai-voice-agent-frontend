import React, { useState } from 'react';
import ChatMessages from './ChatMessages';
import '../css/ChatContainer.css';

const App = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', type: 'incoming' },
    { text: 'Hi! Can you help me understand how AI voice assistants work?', type: 'outgoing' },
    { text: 'Of course! AI voice assistants use natural language processing to understand your speech, convert it to text, process your request, and provide helpful responses.', type: 'incoming' },
    { text: 'That sounds fascinating! What technologies are involved?', type: 'outgoing' },
    { text: 'The main components include speech recognition, natural language understanding, dialog management, and text-to-speech synthesis. Modern systems use deep learning models for accuracy.', type: 'incoming' },
    { text: 'How accurate are they these days?', type: 'outgoing' },
    { text: 'Today\'s voice assistants achieve over 95% accuracy in ideal conditions. They continue to improve with more training data and advanced neural networks.', type: 'incoming' },
    { text: 'Can they understand different accents?', type: 'outgoing' },
    { text: 'Yes! Modern AI models are trained on diverse datasets including various accents, languages, and speaking styles to ensure inclusivity and accuracy.', type: 'incoming' },
    { text: 'What about privacy concerns?', type: 'outgoing' },
    { text: 'Privacy is crucial. Reputable systems process data securely, offer opt-out options, and provide transparency about data usage. Always review privacy policies.', type: 'incoming' },
    { text: 'Thank you for the detailed explanation!', type: 'outgoing' },
    { text: 'You\'re welcome! Feel free to ask if you have more questions.', type: 'incoming' },
  ]);

  return (
    <div className="baap">
      <div className="chat-panel">
        <div className="chat-content">
          <ChatMessages messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default App;
