import React, { useState } from 'react';
import ChatContainer from "../components/ChatContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Home.css"; // Reusing Home styles for now as requested plan implies reusing .chat-fullscreen

const Chat = () => {
    // We can keep these props if Navbar/Footer need them, but the plan says to remove them.
    // However, Navbar and Footer signatures haven't been changed yet.
    // I will create this file assuming Navbar and Footer WILL be updated to not need props.

    return (
        <div className="home-wrapper">
            <Navbar />
            {/* <section className="chat-fullscreen"> */}
                {/* <div className="chat-fullscreen__container"> */}
            <ChatContainer />
                {/* </div> */}
            {/* </section> */}
            <Footer />
        </div>
    );
};

export default Chat;
