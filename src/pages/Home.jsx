import React, { useState } from 'react';
import ChatContainer from "../components/ChatContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import "../css/Home.css";

const Home = () => {
  const [isChatMode, setIsChatMode] = useState(false);

  return (
    <div className="home-wrapper">
      <Navbar isChatMode={isChatMode} setIsChatMode={setIsChatMode} />

      {!isChatMode ? (
        <>
          <Hero />
          <Features />

          <section className="chat-section" id="chat-section">
            <div className="chat-section__container">
              <h2 className="chat-section__title">Try It Now</h2>
              <p className="chat-section__subtitle">
                Start a conversation with our AI voice assistant
              </p>
              <ChatContainer />
            </div>
          </section>

          <About />
        </>
      ) : (
        <section className="chat-fullscreen">
          <div className="chat-fullscreen__container">
            <ChatContainer />
          </div>
        </section>
      )}

      <Footer isChatMode={isChatMode} setIsChatMode={setIsChatMode} />
    </div>
  );
};

export default Home;
