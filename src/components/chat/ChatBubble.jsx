import "../../css/ChatBubble.css";

const ChatBubble = () => {
  return (
    <div className="voice-orb-wrapper">

      {/* STATE CLASSES:
          voice-orb--idle
          voice-orb--listening
          voice-orb--speaking
      */}
      <div className="voice-orb voice-orb--speaking">

        {/* Orbits */}
        <div className="voice-orb-orbit voice-orb-orbit-1"></div>
        <div className="voice-orb-orbit voice-orb-orbit-2"></div>

        {/* Core */}
        <div className="voice-orb-core">

          {/* INNER WAVES */}
          <div className="voice-orb-waves">
            <span className="voice-wave"></span>
            <span className="voice-wave"></span>
            <span className="voice-wave"></span>
          </div>

        </div>

      </div>

      <div className="voice-orb-label">
        Voice active
      </div>

    </div>
  );
};

export default ChatBubble;
