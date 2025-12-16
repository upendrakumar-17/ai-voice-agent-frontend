import "../../css/ChatFooter.css";

const ChatFooter = () => {
  return (
    <div className="voice-footer-wrapper">
      <div className="voice-footer-status">
        Tap to speak
      </div>

      <div className="voice-footer-mic">
        🎤
      </div>

      <div className="voice-footer-hint">
        Hold mic and talk
      </div>
    </div>
  );
};

export default ChatFooter;
