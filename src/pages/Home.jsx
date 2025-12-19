import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContainer from "../components/ChatContainer";
// import Footer from "../components/Footer"; // Removed Footer import
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import "../css/Home.css";

const Home = () => {
  const navigate = useNavigate();

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
          <ChatContainer />
        </div>
      </section>

      <About />

      {/* <Footer /> Replaced with Ask Button */}

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
