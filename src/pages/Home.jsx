import ChatContainer from "../components/ChatContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LiquidVoiceOrb from "../components/sphere";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="voice-orb-container">
        <LiquidVoiceOrb />
      </div>

      <Navbar />
      <ChatContainer />
      <Footer />
    </div>
  );
};

export default Home;
