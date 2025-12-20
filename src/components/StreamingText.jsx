import React, { useState, useEffect, useRef } from 'react';

const StreamingText = ({ text, speed = 10 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);
    const textRef = useRef(text);

    useEffect(() => {
        textRef.current = text;
    }, [text]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (indexRef.current < textRef.current.length) {
                indexRef.current++;
                setDisplayedText(textRef.current.slice(0, indexRef.current));
            }
        }, speed);

        return () => clearInterval(timer);
    }, [speed]);

    return <span>{displayedText}</span>;
};

export default StreamingText;
