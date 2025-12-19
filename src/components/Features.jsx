import React from 'react';
import '../css/Features.css';
import { FaMicrophone, FaComments, FaGlobe, FaLock, FaBolt, FaBullseye } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <FaMicrophone />,
            title: 'Real-Time Voice Recognition',
            description: 'Advanced speech-to-text technology captures your voice with 95%+ accuracy in real-time.'
        },
        {
            icon: <FaComments />,
            title: 'Natural Conversation',
            description: 'Engage in fluid, context-aware dialogues that feel genuinely human and responsive.'
        },
        {
            icon: <FaGlobe />,
            title: 'Multi-Language Support',
            description: 'Communicate in multiple languages with seamless translation and understanding.'
        },
        {
            icon: <FaLock />,
            title: 'Privacy-Focused',
            description: 'Your conversations are secure with end-to-end encryption and no data storage.'
        },
        {
            icon: <FaBolt />,
            title: 'Lightning Fast',
            description: 'Get instant responses with minimal latency for a smooth conversational experience.'
        },
        {
            icon: <FaBullseye />,
            title: 'Context Understanding',
            description: 'AI remembers conversation context to provide more relevant and helpful responses.'
        }
    ];

    return (
        <section className="features" id="features">
            <div className="features__container">
                <div className="features__header">
                    <h2 className="features__title">Explore Our Features</h2>
                    <p className="features__subtitle">
                        Powerful capabilities designed to enhance your communication experience
                    </p>
                </div>

                <div className="features__grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-card__icon">{feature.icon}</div>
                            <h3 className="feature-card__title">{feature.title}</h3>
                            <p className="feature-card__description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
