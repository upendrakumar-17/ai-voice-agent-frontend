import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import ChatPage from './pages/ChatPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
