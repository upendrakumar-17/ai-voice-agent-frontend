import React from 'react';
import '../css/About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__container">
                <div className="about__content">
                    <h2 className="about__title">How It Works</h2>
                    <p className="about__description">
                        Our AI voice assistant leverages cutting-edge technology to deliver seamless conversational experiences.
                    </p>

                    <div className="about__steps">
                        <div className="about__step">
                            <div className="about__step-number">1</div>
                            <div className="about__step-content">
                                <h3>Speak Naturally</h3>
                                <p>Click the "Speak" button and talk naturally. Our advanced speech recognition captures your voice instantly.</p>
                            </div>
                        </div>

                        <div className="about__step">
                            <div className="about__step-number">2</div>
                            <div className="about__step-content">
                                <h3>AI Processing</h3>
                                <p>Your speech is converted to text and processed using natural language understanding and deep learning models.</p>
                            </div>
                        </div>

                        <div className="about__step">
                            <div className="about__step-number">3</div>
                            <div className="about__step-content">
                                <h3>Get Responses</h3>
                                <p>Receive intelligent, context-aware responses displayed in the chat interface with real-time interaction.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about__stats">
                        <div className="about__stat">
                            <div className="about__stat-number">95%+</div>
                            <div className="about__stat-label">Accuracy Rate</div>
                        </div>
                        <div className="about__stat">
                            <div className="about__stat-number">&lt;100ms</div>
                            <div className="about__stat-label">Response Time</div>
                        </div>
                        <div className="about__stat">
                            <div className="about__stat-number">24/7</div>
                            <div className="about__stat-label">Availability</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
