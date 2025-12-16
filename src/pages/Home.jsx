//import ChatContainer from "../components/chat/ChatContainer";
import Navbar from "../components/Navbar";
import LiquidVoiceOrb from "../components/sphere";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
        <Navbar/>
        <LiquidVoiceOrb/>
      {/* <ChatContainer /> */}
    </div>
  );
};

export default Home;
