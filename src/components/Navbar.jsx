import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = ({ isChatMode, setIsChatMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <h1 className="navbar__title">
          {isChatMode ? 'Voice Chat Session' : 'AI Voice Chat'}
        </h1>
      </div>

      {!isChatMode && (
        <>
          <div className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}>
            <button className="navbar__link" onClick={() => scrollToSection('home')}>
              Home
            </button>
            <button className="navbar__link" onClick={() => scrollToSection('features')}>
              Features
            </button>
            <button className="navbar__link" onClick={() => scrollToSection('chat-section')}>
              Try Now
            </button>
            <button className="navbar__link" onClick={() => scrollToSection('about')}>
              About
            </button>
          </div>

          <div className="navbar__controls">
            <select className="navbar__dropdown" defaultValue="general">
              <option value="general">General</option>
              <option value="technical">Technical</option>
              <option value="casual">Casual</option>
            </select>
            <button
              className="navbar__menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
