import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Conversation from './routes/conversation';
import Unavailable from './routes/unavailable'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENTID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/conversation' element={<Conversation />} />
          <Route path='/unavailable' element={<Unavailable />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
