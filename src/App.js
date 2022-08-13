import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/nav';
import Conversation from './routes/conversation';
import Unavailable from './routes/unavailable';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Conversation />} />
        <Route path="/unavailable" element={<Unavailable />} />
      </Routes>
    </div>
  );
}

export default App;
