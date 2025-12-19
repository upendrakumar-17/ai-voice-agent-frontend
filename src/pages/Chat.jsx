import React, { useState } from 'react';
import ChatContainer from "../components/ChatContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Home.css"; // Reusing Home styles for now as requested plan implies reusing .chat-fullscreen

const Chat = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I assist you today?', type: 'incoming' },
        { text: 'Hi! Can you help me understand how AI voice assistants work?', type: 'outgoing' },
        { text: 'Of course! AI voice assistants use natural language processing to understand your speech, convert it to text, process your request, and provide helpful responses.', type: 'incoming' },
        { text: 'That sounds fascinating! What technologies are involved?', type: 'outgoing' },
        { text: 'The main components include speech recognition, natural language understanding, dialog management, and text-to-speech synthesis. Modern systems use deep learning models for accuracy.', type: 'incoming' },
        { text: 'How accurate are they these days?', type: 'outgoing' },
        { text: 'Today\'s voice assistants achieve over 95% accuracy in ideal conditions. They continue to improve with more training data and advanced neural networks.', type: 'incoming' },
        { text: 'Can they understand different accents?', type: 'outgoing' },
        { text: 'Yes! Modern AI models are trained on diverse datasets including various accents, languages, and speaking styles to ensure inclusivity and accuracy.', type: 'incoming' },
        { text: 'What about privacy concerns?', type: 'outgoing' },
        { text: 'Privacy is crucial. Reputable systems process data securely, offer opt-out options, and provide transparency about data usage. Always review privacy policies.', type: 'incoming' },
        { text: 'Thank you for the detailed explanation!', type: 'outgoing' },
        { text: 'You\'re welcome! Feel free to ask if you have more questions.', type: 'incoming' },
    ]);
    const [isRecording, setIsRecording] = useState(false);

    // Audio refs
    const mediaRecorderRef = React.useRef(null);
    const audioChunksRef = React.useRef([]);
    const audioQueueRef = React.useRef([]);
    const isPlayingAudioRef = React.useRef(false);
    const recognitionRef = React.useRef(null);

    React.useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                let interimTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    interimTranscript += event.results[i][0].transcript;
                }

                if (interimTranscript) {
                    setMessages(prev => {
                        const newMessages = [...prev];
                        // Find the live outgoing message (search backwards)
                        let liveIndex = -1;
                        for (let i = newMessages.length - 1; i >= 0; i--) {
                            if (newMessages[i].isLive && newMessages[i].type === 'outgoing') {
                                liveIndex = i;
                                break;
                            }
                        }

                        if (liveIndex !== -1) {
                            // Update the existing live message
                            newMessages[liveIndex] = { ...newMessages[liveIndex], text: interimTranscript };
                        }
                        // If no live message found, don't create one - the placeholder was already created in toggleRecording
                        return newMessages;
                    });
                }
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error", event.error);
            };

            recognitionRef.current = recognition;
        }
    }, []);

    const playNextAudio = async () => {
        if (audioQueueRef.current.length === 0) {
            isPlayingAudioRef.current = false;
            return;
        }

        isPlayingAudioRef.current = true;
        const base64Audio = audioQueueRef.current.shift();

        try {
            // Convert base64 to blob
            const binaryString = window.atob(base64Audio);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            const audioBlob = new Blob([bytes], { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);

            audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
                playNextAudio();
            };

            audio.onerror = (e) => {
                console.error('Audio playback error', e);
                playNextAudio();
            };

            await audio.play();
        } catch (error) {
            console.error('Audio chunk playback error:', error);
            playNextAudio();
        }
    };

    const playAudioChunk = (base64Audio) => {
        audioQueueRef.current.push(base64Audio);
        if (!isPlayingAudioRef.current) {
            playNextAudio();
        }
    };

    const handleStreamEvent = (data) => {
        switch (data.type) {
            case 'transcription':
                // Update the user's outgoing message with the final transcribed text
                setMessages(prev => {
                    const newMessages = [...prev];
                    // Search backwards for the last outgoing message
                    let targetIndex = -1;
                    for (let i = newMessages.length - 1; i >= 0; i--) {
                        if (newMessages[i].type === 'outgoing') {
                            targetIndex = i;
                            break;
                        }
                    }

                    if (targetIndex !== -1) {
                        newMessages[targetIndex] = { ...newMessages[targetIndex], text: data.text, isLive: false };
                    } else {
                        newMessages.push({ text: data.text, type: 'outgoing', isLive: false });
                    }
                    return newMessages;
                });
                break;

            case 'response_start':
                // 1. Start with the "..." loading state
                setMessages(prev => [
                    ...prev,
                    {
                        text: '...',           // The visible loading dots
                        type: 'incoming',
                        isStreaming: true,     // We are receiving data
                        isModelLoading: true   // Specific flag: we haven't received text yet
                    }
                ]);
                break;

            case 'text_chunk':
                setMessages(prev => {
                    const newMessages = [...prev];
                    const lastIndex = newMessages.length - 1;
                    const lastMsg = newMessages[lastIndex];

                    // Ensure we are modifying the correct incoming stream message
                    if (lastMsg && lastMsg.isStreaming) {
                        if (lastMsg.isModelLoading) {
                            // 2. First chunk received: REPLACE the '...' with the first chunk
                            newMessages[lastIndex] = {
                                ...lastMsg,
                                text: data.text,
                                isModelLoading: false // Turn off the loading flag
                            };
                        } else {
                            // 3. Subsequent chunks: APPEND to the existing text
                            newMessages[lastIndex] = {
                                ...lastMsg,
                                text: lastMsg.text + data.text
                            };
                        }
                    } else {
                        // Fallback: If for some reason response_start was missed
                        newMessages.push({ text: data.text, type: 'incoming', isStreaming: true, isModelLoading: false });
                    }
                    return newMessages;
                });
                break;

            case 'audio_chunk':
                playAudioChunk(data.data);
                break;

            case 'response_complete':
                setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMsg = newMessages[newMessages.length - 1];
                    if (lastMsg) {
                        lastMsg.isStreaming = false;
                        lastMsg.isModelLoading = false;

                        // Text-to-Speech using Web Speech API
                        if (lastMsg.type === 'incoming' && lastMsg.text && lastMsg.text !== '...' && 'speechSynthesis' in window) {
                            // Cancel any ongoing speech
                            window.speechSynthesis.cancel();

                            const utterance = new SpeechSynthesisUtterance(lastMsg.text);
                            utterance.rate = 1.0;
                            utterance.pitch = 1.0;
                            utterance.volume = 1.0;

                            // Try to use a nice voice if available
                            const voices = window.speechSynthesis.getVoices();
                            const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Microsoft'));
                            if (preferredVoice) {
                                utterance.voice = preferredVoice;
                            }

                            // window.speechSynthesis.speak(utterance);
                        }
                    }
                    return newMessages;
                });
                break;

            case 'done':
                // Session ended or ready for next input
                break;

            case 'error':
                console.error('Server error:', data.message);
                setMessages(prev => [...prev, { text: `Error: ${data.message}`, type: 'incoming' }]);
                break;

            default:
                break;
        }
    };

    const sendAudioToAPI = async (audioBlob) => {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'audio.webm');
        formData.append('session_id', 'test_user_1'); // TODO: Make dynamic if needed

        try {
            const response = await fetch('http://localhost:8002/audio/chat-streaming', {
                method: 'POST',
                body: formData
            });

            console.log("Response", response);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    console.log("Stream complete");
                    break;
                }

                console.log("Received chunk size:", value.length);
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n\n');
                buffer = lines.pop(); // Keep incomplete chunk

                for (const line of lines) {
                    console.log("Processing line:", line);
                    if (line.startsWith('data: ')) {
                        try {
                            const data = JSON.parse(line.slice(6));
                            console.log("Parsed data:", data);
                            handleStreamEvent(data);
                        } catch (e) {
                            console.error('Parse error:', e, "Line:", line);
                        }
                    }
                }
            }

        } catch (error) {
            console.error('Error sending audio:', error);
            setMessages(prev => [...prev, { text: "Sorry, I couldn't process that request.", type: 'incoming' }]);
        }
    };

    const toggleRecording = async () => {
        if (!isRecording) {
            try {
                // Start Speech Recognition
                recognitionRef.current?.start();
                // Create a placeholder message for live transcription
                setMessages(prev => [...prev, { text: '...', type: 'outgoing', isLive: true }]);

                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorderRef.current = new MediaRecorder(stream);
                audioChunksRef.current = [];

                mediaRecorderRef.current.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        audioChunksRef.current.push(event.data);
                    }
                };

                mediaRecorderRef.current.onstop = async () => {
                    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                    // Stop all tracks
                    stream.getTracks().forEach(track => track.stop());
                    console.log("Audio blob", audioBlob);

                    // Finalize the live message state (remove isLive) just in case
                    setMessages(prev => {
                        const newMessages = [...prev];
                        const lastIndex = newMessages.length - 1;
                        if (newMessages[lastIndex] && newMessages[lastIndex].isLive) {
                            newMessages[lastIndex] = { ...newMessages[lastIndex], isLive: false };
                        }
                        return newMessages;
                    });

                    await sendAudioToAPI(audioBlob);
                };

                mediaRecorderRef.current.start();
                setIsRecording(true);
            } catch (err) {
                console.error('Microphone error:', err);
                alert('Could not access microphone.');
            }
        } else {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                recognitionRef.current?.stop();
                mediaRecorderRef.current.stop();
                setIsRecording(false);
            }
        }
    };

    return (
        <div className="home-wrapper">
            <Navbar />
            <ChatContainer messages={messages} setMessages={setMessages} />
            <Footer isRecording={isRecording} onToggleRecording={toggleRecording} />
        </div>
    );
};


export default Chat;
