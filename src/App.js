import './App.css';
import LoginButton from './components/button/login';
import LogoutButton from './components/button/logout';
import Main from './components/Main';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <LoginButton /> <LogoutButton />
      <Profile />
      <Main />
    </div>
  );
}

export default App;
