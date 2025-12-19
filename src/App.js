import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Chat from './pages/Chat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
