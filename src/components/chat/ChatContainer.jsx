import "../../css/ChatContainer.css";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatFooter from "./ChatFooter";

const ChatContainer = () => {
  return (
    <div className="voice-container-wrapper">
      <ChatHeader />
      <ChatMessage />
      <ChatFooter />
    </div>
  );
};

export default ChatContainer;
