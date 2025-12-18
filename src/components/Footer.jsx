import React, { useState } from 'react';
import SiriWaveform from './SiriWaveform';
import '../css/Footer.css';

const Footer = ({ isChatMode, setIsChatMode }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSpeakClick = () => {
    setIsActive(true);
    setIsChatMode(true);
  };

  const handleStopClick = () => {
    setIsActive(false);
  };

  const handleExitChat = () => {
    setIsActive(false);
    setIsChatMode(false);
  };

  return (
    <>
      {/* Voice Control Bar - Sticky at bottom */}
      <div className="voice-control-bar">
        <div className="voice-control-bar__content">
          {isChatMode && (
            <button
              className="voice-control-bar__exit"
              onClick={handleExitChat}
            >
              ← Exit Chat
            </button>
          )}

          <button
            className={`voice-control-bar__button ${isActive ? 'voice-control-bar__button--active' : ''}`}
            onClick={isActive ? handleStopClick : handleSpeakClick}
          >
            {isActive ? 'Stop' : 'Speak'}
          </button>

          <div className="voice-control-bar__waveform">
            <SiriWaveform isActive={isActive} />
          </div>

          <div className="voice-control-bar__actions">
            <button className="voice-control-bar__action">Clear</button>
            <button className="voice-control-bar__action">Reset</button>
          </div>
        </div>
      </div>

      {/* Informational Footer - Hidden in chat mode */}
      {!isChatMode && (
        <footer className="footer-info">
          <div className="footer-info__container">
            <div className="footer-info__section">
              <h3 className="footer-info__title">BodhitaMinds AI</h3>
              <p className="footer-info__description">
                Advanced AI-powered voice assistant by BodhitaMinds that enhances communication with natural language processing and real-time responses.
              </p>
            </div>

            <div className="footer-info__section">
              <h4 className="footer-info__heading">Quick Links</h4>
              <div className="footer-info__links">
                <a href="#home" className="footer-info__link">Home</a>
                <a href="#features" className="footer-info__link">Features</a>
                <a href="#chat-section" className="footer-info__link">Try Now</a>
                <a href="#about" className="footer-info__link">About</a>
              </div>
            </div>

            <div className="footer-info__section">
              <h4 className="footer-info__heading">Contact</h4>
              <div className="footer-info__contact">
                <p>Email: support@aivoicechat.com</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="footer-info__bottom">
            <p>&copy; 2025 BodhitaMinds AI. All rights reserved.</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
