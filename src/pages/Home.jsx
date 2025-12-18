import ChatContainer from "../components/ChatContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <ChatContainer />
      <Footer />
    </div>
  );
};

export default Home;
