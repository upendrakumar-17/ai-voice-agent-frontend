import React from 'react';
import '../css/HomeFooter.css';

const HomeFooter = () => {
    return (
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
                        <p>Email: support@bodhitaminds.com</p>
                        <p>Available 24/7</p>
                    </div>
                </div>
            </div>

            <div className="footer-info__bottom">
                <p>&copy; 2025 BodhitaMinds AI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default HomeFooter;
