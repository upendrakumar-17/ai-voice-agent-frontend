import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {

  const [isNavSectionMenuOpen, setIsNavSectionMenuOpen] = useState(false);
  const [themeButton, setThemeButton] = useState('light');
  const location = useLocation();
  const isChatMode = location.pathname === '/chat';

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavSectionMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <h1 className="navbar__title">
          {isChatMode ? 'BodhitaMindsAI' : 'BodhitaMinds AI'}
        </h1>
      </div>

      {!isChatMode && (
        <div className={`navbar__nav ${isNavSectionMenuOpen ? 'navbar__nav--open' : ''}`}>
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
            onClick={() => setIsNavSectionMenuOpen(!isNavSectionMenuOpen)}
            aria-label="Toggle menu"
          >
            {isNavSectionMenuOpen ? '✕' : '☰'}
          </button>
        )}

        <button
          className="navbar__theme-toggle"
          onClick={() => setThemeButton(themeButton === 'light' ? 'dark' : 'light')}
          aria-label="Toggle theme"
        >
          {themeButton === 'light' ? <FaMoon /> : <FaSun />}
        </button>

      </div>

    </nav>
  );
};


export default Navbar;

