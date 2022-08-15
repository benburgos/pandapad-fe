import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/nav';
import Conversation from './routes/conversation';
import ConversationDetail from './routes/conversationDetail';
import Unavailable from './routes/unavailable';
import LoginButton from './components/button/login'
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className='splash-page'>
        <h1>Welcome to Pandapad!</h1>
        <img alt='pandapad-logo' src='https://www.freepnglogos.com/uploads/panda-png/panda-thomas-dafoe-studios-bare-bears-png-pack-3.png'/>
        <LoginButton />
      </div>
    );
  } else {
    return (
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Conversation />} />
        <Route path="/unavailable" element={<Unavailable />} />
        <Route path="/conversation/detail/:id" element={<ConversationDetail />} />
      </Routes>
    </div>
    )
  }
}

export default App;
