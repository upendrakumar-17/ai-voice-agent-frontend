import React, { useState } from 'react';
import ChatMessages from './ChatMessages';
import '../css/ChatContainer.css';

const App = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbcllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbjdbcjzdbcjhzdbczdhjcbzjd', type: 'incoming' },
    { text: 'Hi,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbwadyetfvruygbansoicnsoxmaodmoehfrusbfudcbaubd how are you?', type: 'outgoing' },
    { text: 'HelloHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjx!', type: 'incoming' },
    { text: 'Hi, how are yi,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidou?', type: 'outgoing' },
    { text: 'HelHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxlo!', type: 'incoming' },
    { text: 'Hi, hoi,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidw are you?', type: 'outgoing' },
    { text: 'HelHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxlo!', type: 'incoming' },
    { text: 'Hi, how ai,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidre you?', type: 'outgoing' },
    { text: 'HelHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxlo!', type: 'incoming' },
    { text: 'Hi, how ai,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidre you?', type: 'outgoing' },
    { text: 'HelHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxlo!', type: 'incoming' },
    { text: 'Hi, how ai,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidre you?', type: 'outgoing' },
    { text: 'HelHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxlo!', type: 'incoming' },
    { text: 'Hi, how i,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidare you?', type: 'outgoing' },
    { text: 'HelHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxlo!', type: 'incoming' },
    { text: 'Hi, how i,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidare you?', type: 'outgoing' },
    { text: 'HeHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxllo!', type: 'incoming' },
    { text: 'Hi, how i,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidare you?', type: 'outgoing' },
    { text: 'HeHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxllo!', type: 'incoming' },
    { text: 'Hi, how i,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidare you?', type: 'outgoing' },
    { text: 'HelHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxlo!', type: 'incoming' },
    { text: 'Hii,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcid, how are you?', type: 'outgoing' },
    { text: 'HellHello!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcidsbvhjzdb dsbcidbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxo!', type: 'incoming' },
    { text: 'Hii,dhvbhdjv hdjvbjhdbvjzbczkscsihdwaiodkjbeufbrgfhjfbllo!vnbjkxjvbfxjbvhjfbvhjfbvjxdbvjbfvjbfjvbdhjvbzdubvckjdcjzdbcid, how are you?', type: 'outgoing' },

  ]);


  //const[messages, setMessages] = useState([]);

  return (
    <div className="baap">
      <div className="chat-panel">
        <div className="chat-content">
          <ChatMessages messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default App;
