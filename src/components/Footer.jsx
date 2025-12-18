import React, { useState } from 'react';
import '../css/Footer.css';

const Footer = () => {
  const [showButtonOne, setShowButtonOne] = useState(true);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="footer">
      <div className="footer__button-groups">

        {/* Left button (Start / Stop) */}
        <div className="footer__group footer__group--left">
          {showButtonOne ? (
            <button
              className="footer__button"
              onClick={() => setShowButtonOne(false)}
            >
              Speak
            </button>
          ) : (
            <button
              className="footer__button"
              onClick={() => setShowButtonOne(true)}
            >
              Stop
            </button>
          )}
        </div>


        {/* Right buttons */}
        <div className="footer__group footer__group--right">
          <button className="footer__button">Clear</button>
          <button className="footer__button">Reset</button>
        </div>

      </div>
    </div>
  );
};

export default Footer;
