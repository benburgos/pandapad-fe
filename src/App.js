import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/nav';
import Conversation from './routes/conversation';
import ConversationDetail from './routes/conversationDetail';
import Unavailable from './routes/unavailable';

function App() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Conversation />} />
          <Route path="/unavailable" element={<Unavailable />} />
          <Route path="/conversation/detail/:id" element={<ConversationDetail />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <h1>Oh Hello</h1>
    )
  }
}

export default App;
