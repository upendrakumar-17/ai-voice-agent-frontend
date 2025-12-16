import "../../css/ChatHeader.css";

const ChatHeader = () => {
  return (
    <div className="voice-header-wrapper">
      <div className="voice-header-left">
        <div className="voice-header-avatar">AI</div>
        <div className="voice-header-info">
          <div className="voice-header-name">AI Assistant</div>
          <div className="voice-header-status">Listening...</div>
        </div>
      </div>

      <div className="voice-header-right">
        <div className="voice-header-call-timer">00:32</div>
      </div>
    </div>
  );
};

export default ChatHeader;
