import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContainer from "../components/ChatContainer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import "../css/Home.css";
import HomeFooter from '../components/HomeFooter';

const Home = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', type: 'incoming' },
    { text: 'Hi! Can you help me understand how AI voice assistants work?', type: 'outgoing' },
    { text: 'Of course! AI voice assistants use natural language processing to understand your speech, convert it to text, process your request, and provide helpful responses.', type: 'incoming' },
    { text: 'That sounds fascinating! What technologies are involved?', type: 'outgoing' },
    { text: 'The main components include speech recognition, natural language understanding, dialog management, and text-to-speech synthesis. Modern systems use deep learning models for accuracy.', type: 'incoming' },
  ]);

  return (
    <div className="home-wrapper">

      <Navbar />

      <Hero />

      <Features />

      <section className="chat-section" id="chat-section">
        <div className="chat-section__container">
          <h2 className="chat-section__title">Try It Now</h2>
          <p className="chat-section__subtitle">
            Start a conversation with BodhitaMinds AI voice assistant
          </p>
          <ChatContainer messages={messages} setMessages={setMessages} />
        </div>
      </section>

      <About />

      <HomeFooter />

      <button
        className="ask-floating-btn"
        onClick={() => navigate('/chat')}
      >
        Ask
      </button>

    </div>
  );
};

export default Home;
