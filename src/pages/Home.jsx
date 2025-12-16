import ChatContainer from "../components/ChatContainer";
// import Drop from "../components/Drop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LiquidVoiceOrb from "../components/sphere";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-background">
        <LiquidVoiceOrb />
      </div>

      <div className="home-navbar">
        <Navbar />
      </div>

      <div className="home-chat-container">
        <ChatContainer />
      </div>

      <div className="home-footer">
        <Footer />
      </div>
      {/* <div>
        <Drop/>
      </div> */}
    </div>
  );
};

export default Home;
