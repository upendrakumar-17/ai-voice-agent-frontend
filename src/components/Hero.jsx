import React from 'react';
import '../css/Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero" id="home">
            <div className="hero__content">
                <h1 className="hero__title">
                    Transform Your Communication with
                    <span className="hero__highlight"> BodhitaMinds AI</span>
                </h1>
                <p className="hero__subtitle">
                    Experience natural conversations powered by advanced AI from BodhitaMinds.
                    Speak freely and get intelligent responses in real-time.
                </p>
                <button className="hero__cta" onClick={() => navigate('/chat')}>
                    Try it now →
                </button>
            </div>
            <div className="hero__decoration">
                <div className="hero__circle hero__circle--1"></div>
                <div className="hero__circle hero__circle--2"></div>
                <div className="hero__circle hero__circle--3"></div>
            </div>
        </section>
    );
};

export default Hero;
