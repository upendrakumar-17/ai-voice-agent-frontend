import React, { useRef, useEffect } from 'react';

const SiriWaveform = ({ isActive }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const analyserRef = useRef(null);
    const dataRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Setup audio if active
        if (isActive && !analyserRef.current) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then((stream) => {
                    const audioCtx = new AudioContext();
                    const source = audioCtx.createMediaStreamSource(stream);
                    const analyser = audioCtx.createAnalyser();
                    analyser.fftSize = 512; // Increased for better frequency resolution
                    analyser.smoothingTimeConstant = 0.7; // Smoother transitions
                    source.connect(analyser);

                    analyserRef.current = analyser;
                    dataRef.current = new Uint8Array(analyser.frequencyBinCount);
                })
                .catch(err => console.log('Microphone access denied:', err));
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            if (isActive && analyserRef.current && dataRef.current) {
                // Get audio data
                analyserRef.current.getByteFrequencyData(dataRef.current);

                // Focus on voice frequencies (85Hz - 255Hz) for better sensitivity
                const voiceRange = dataRef.current.slice(3, 12);
                const avgEnergy = voiceRange.reduce((a, b) => a + b, 0) / voiceRange.length;
                const normalizedEnergy = Math.min(avgEnergy / 180, 1); // Increased sensitivity

                // Draw animated Siri-style waves
                const time = Date.now() / 1000;
                const numWaves = 5;
                const centerY = height / 2;

                for (let i = 0; i < numWaves; i++) {
                    ctx.beginPath();

                    const opacity = 0.8 - (i * 0.13);
                    const gradient = ctx.createLinearGradient(0, 0, width, 0);
                    gradient.addColorStop(0, `rgba(124, 58, 237, ${opacity * 0.3})`);
                    gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity})`);
                    gradient.addColorStop(1, `rgba(124, 58, 237, ${opacity * 0.3})`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 3 - (i * 0.4);

                    for (let x = 0; x < width; x++) {
                        // Calculate edge dampening - endpoints have zero displacement
                        const normalizedX = x / width; // 0 to 1
                        const distanceFromCenter = Math.abs(normalizedX - 0.5) * 2; // 0 at center, 1 at edges
                        const edgeDampening = Math.pow(1 - distanceFromCenter, 3); // Cubic falloff to zero at edges

                        const frequency = 0.015 + (i * 0.004);
                        const baseAmplitude = 6 + normalizedEnergy * 35; // Increased voice response
                        const amplitude = baseAmplitude * (1 - i * 0.18) * edgeDampening; // Apply edge dampening
                        const phase = time * (1.5 + i * 0.4);

                        const y = centerY +
                            Math.sin(x * frequency + phase) * amplitude +
                            Math.sin(x * frequency * 2.5 - phase * 1.3) * (amplitude * 0.6) +
                            Math.sin(x * frequency * 0.5 + phase * 0.8) * (amplitude * 0.3);

                        if (x === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    }

                    ctx.stroke();
                }
            } else {
                // Draw static line when not active
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(168, 85, 247, 0.3)';
                ctx.lineWidth = 2;
                ctx.moveTo(0, height / 2);
                ctx.lineTo(width, height / 2);
                ctx.stroke();
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isActive]);

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={60}
            style={{
                width: '100%',
                height: '60px',
                maxWidth: '400px'
            }}
        />
    );
};

export default SiriWaveform;
