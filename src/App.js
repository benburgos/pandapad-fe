import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/nav';
import Conversation from './routes/conversation';
import ConversationDetail from './routes/conversationDetail';
import Unavailable from './routes/unavailable';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Refer to index.js to add the login route */}
        <Route path="/" element={<Conversation />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/unavailable" element={<Unavailable />} />
        <Route path="/conversation/detail/:id" element={<ConversationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
