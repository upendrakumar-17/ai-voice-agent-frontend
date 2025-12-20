import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SiriWaveform from './SiriWaveform';
import '../css/Footer.css';

const Footer = ({ isRecording, setIsRecording, onToggleRecording, isResponding }) => {

  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isChatMode = location.pathname === '/chat';

  // If in chat mode, usage of internal state vs props:
  // We want the Footer button to trigger the parent's toggleRecording if in chat mode.
  // We also want the visual state (isActive/isRecording) to be driven by the prop in chat mode.

  const activeState = isChatMode ? isRecording : isActive;

  const handleSpeakClick = () => {
    if (isResponding) return; // Prevent action if responding
    if (isChatMode) {
      if (onToggleRecording) onToggleRecording();
    } else {
      setIsActive(true);
      navigate('/chat');
      // We can't immediately start recording here because we haven't mounted Chat yet/passed the prop down?
      // Actually, navigation happens, Chat mounts. The user might need to click again or we can pass state via router location (advanced).
      // For now, simple navigation is fine. User clicks again to start.
      // OR: "Speak" on home page just navigates to Chat.
    }
  };

  const handleStopClick = () => {
    if (isChatMode) {
      if (onToggleRecording) onToggleRecording();
    } else {
      setIsActive(false);
    }
  };

  const handleExitChat = () => {
    setIsActive(false);
    navigate('/');
  };

  return (
    <>
      {/* Voice Control Bar - Sticky at bottom */}
      <>{isChatMode && (
        <div className="voice-control-bar">
          <div className="voice-control-bar__content">
            <div className="voice-control-bar__left-controls">
              <button
                className="voice-control-bar__exit"
                onClick={handleExitChat}
              >
                ← Exit Chat
              </button>
              {!isResponding && (
                <button
                  className={`voice-control-bar__button ${activeState ? 'voice-control-bar__button--active' : ''}`}
                  onClick={activeState ? handleStopClick : handleSpeakClick}
                >
                  {activeState ? 'Stop' : 'Speak'}
                </button>
              )}
            </div>

            <div className="voice-control-bar__waveform">
              <SiriWaveform isActive={activeState} />
            </div>

            <div className="voice-control-bar__actions">
              {(
                <select className="navbar__dropdown" defaultValue="general">
                  <option value="general">General</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                </select>
              )}
              {/* <button className="voice-control-bar__action">Clear</button> */}
              <button className="voice-control-bar__action">Reset</button>
            </div>
          </div>
        </div>
      )}</>

      {/* Informational Footer - Hidden in chat mode
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
      )} */}
    </>
  );
};

export default Footer;
