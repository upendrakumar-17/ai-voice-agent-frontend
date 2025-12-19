import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isChatMode = location.pathname === '/chat';

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } }); // Handle cross-page navigation if needed, or just navigate to home
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <h1 className="navbar__title">
          {isChatMode ? 'BodhitaMinds Chat Session' : 'BodhitaMinds AI'}
        </h1>
      </div>

      {!isChatMode && (
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
      )}

      <div className="navbar__controls">
        {isChatMode && (
          <select className="navbar__dropdown" defaultValue="general">
            <option value="general">General</option>
            <option value="technical">Technical</option>
            <option value="casual">Casual</option>
          </select>
        )}

        {!isChatMode && (
          <button
            className="navbar__menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
